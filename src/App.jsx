import "./App.css";

const familyTreeData = [
     {
    id: 1,
    label: "Parent 1",
    children: [
      { id: 2, label: "Child 1" },
      { id: 3, label: "Child 2" },
      {
        id: 4,
        label: "Parent 2",
        children: [
          { id: 5, label: "Child 1" },
          { id: 6, label: "Child 2" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Parent 3",
    children: [
      { id: 8, label: "Child 1" },
      { id: 9, label: "Child 2" },
    ],
  },
];

const FamilyTree = ({data}) => {
  return (
    <div>
      {data}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <h2>Soprano's Family Tree</h2>
      <FamilyTree
        data={familyTreeData}
        />
    </div>
  )
}