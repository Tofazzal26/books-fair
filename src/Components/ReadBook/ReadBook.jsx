import ReadBookCard from "./ReadBookCard";

const ReadBook = ({ readBook }) => {
  return (
    <div>
      {readBook.map((bookCard) => (
        <ReadBookCard key={bookCard.id} bookCard={bookCard} />
      ))}
    </div>
  );
};

export default ReadBook;
