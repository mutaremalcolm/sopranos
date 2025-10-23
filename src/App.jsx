import "./App.css";

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

const Checkboxes = ({data}) => {
  return (  
    <div key="id">
      {data.map((node) => (
         <div> 
          <input type="checkbox" />
        <span>{node.name}</span> 
        {node.children && <Checkboxes data={node.children} />}
        </div>
        ))}   
    </div>
  );
};
  
export default function App() {
  return (
    <div>
      <Checkboxes data={checkboxesData} />
    </div>
  )
}