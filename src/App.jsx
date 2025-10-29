import "./App.css";
import { useState } from "react";

const checkboxesData = [
     {
    id: 1,
    name: "Parent 1",
    children: [
      { id: 2, 
        name: "Parent 2",
        children: [
         { 
          id: 3, 
          name: "Child 1" 
        },
        { 
          id: 4, 
          name: "Child 2" 
        },
        { id: 5, 
        name: "Child 3",
        children: [
          { id: 6, name: "Child 5" },
          { id: 7, name: "Child 6"},
        ],
      },
        ] },
      
      { id: 8, 
        name: "Parent 3",
        children: [
          { id: 9, name: "Child 7" },
          { id: 10, name: "Child 8"},
        ],
      },
      {
        id: 11,
        name: "Parent 4",
        children: [
          { id: 12, name: "Child 9" },
          { id: 13, name: "Child 10" },
        ],
      },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => { 
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = {...prev, [node.id]: isChecked }
      //If children are present add them to new state
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child)
        })
      }
      updateChildren(node) 

      // If all children are checked, mark the parent as checked
      const verifyChecked = (node) => {
        if(!node.children) return newState[node.id] || false

        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );

        newState[node.id] = allChildrenChecked;
        return allChildrenChecked
      }
      checkboxesData.forEach((node) => verifyChecked(node))

      return newState;  
    })
  }

  console.log(checked)

  return (  
    <div>
      {data.map((node) => (
         <div className="parent" key={node.id}> 
          <input 
            type="checkbox" 
            checked={checked[node.id ] || false} 
            onChange={(e)=> handleChange(e.target.checked, node)}
            />
        <span>{node.name}</span> 
        {node.children && <Checkboxes data={node.children} checked={checked} setChecked={setChecked}/>}
        </div>
        ))}   
    </div>
  );
};
  
export default function App() {
  const [checked, setChecked] = useState({  })
  return (
    <div>
      <Checkboxes 
        data={checkboxesData} 
        checked={checked} 
        setChecked={setChecked} 
        />
    </div>
  )
}