import WishCard from "./WishCard";

const WishBook = ({ wishBook }) => {
  return (
    <div>
      {wishBook.map((Card) => (
        <WishCard key={Card.id} Card={Card} />
      ))}
    </div>
  );
};

export default WishBook;
