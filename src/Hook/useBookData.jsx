import { useEffect, useState } from "react";

const useBookData = () => {
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBookData(data));
    setLoading(false);
  }, []);

  return { bookData, loading };
};

export default useBookData;
