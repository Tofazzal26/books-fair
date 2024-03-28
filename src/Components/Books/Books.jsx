import { useState } from "react";
import useBookData from "./../../Hook/useBookData";
import BookCard from "./BookCard";

const Books = () => {
  const { bookData, loading } = useBookData();

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mt-[100px] mb-[40px]">
        Books
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
        {bookData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
