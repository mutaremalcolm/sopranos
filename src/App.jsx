import "./App.css";

const FamilyTreeData = [
     {
    id: 1,
    name: "Parent 1",
    children: [
      { id: 2, label: "Child 1" },
      { id: 3, label: "Child 2" },
      {
        id: 4,
        name: "Parent 2",
        children: [
          { id: 5, name: "Child 1" },
          { id: 6, name: "Child 2" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Parent 3",
    children: [
      { id: 8, name: "Child 1" },
      { id: 9, name: "Child 2" },
    ],
  },
];

const FamilyTree = ({data}) => {
  return (  
    <div>
      {data.map (node=> (
         <div key="id"> 
          <input type="checkbox" />
        <span>{node.name}</span>
        {node.children &&  <FamilyTreeData data={node.children} />} 
        </div>
        ))}   
    </div>
  )
}
  
export default function App() {
  return (
    <div>
      <h2>Soprano's Family Tree</h2>
      <FamilyTree
        data={FamilyTreeData}
        />
    </div>
  )
}