import { useEffect, useState } from "react";
import ChildCard from "./ChildCard";

const ChildBook = () => {
  const [child, setChild] = useState([]);
  useEffect(() => {
    fetch("/Child.json")
      .then((res) => res.json())
      .then((data) => setChild(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto">
      {child.map((childBook) => (
        <ChildCard key={childBook.id} childBook={childBook} />
      ))}
    </div>
  );
};

export default ChildBook;
