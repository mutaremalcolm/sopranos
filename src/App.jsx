import "./App.css";
import { useState } from "react";

const checkboxesData = [
     {
    id: 1,
    name: "Fruits",
    children: [
      { id: 2, name: "Apple" },
      { id: 3, name: "Banana" },
      {
        id: 4,
        name: "Citrus",
        children: [
          { id: 5, name: "Orange" },
          { id: 6, name: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Vegetables",
    children: [
      { id: 8, name: "Carrot" },
      { id: 9, name: "Broccoli" },
    ],
  },
];

const Checkboxes = ({data, checked, setChecked}) => { 
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