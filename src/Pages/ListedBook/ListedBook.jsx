import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReadBook from "./../../Components/ReadBook/ReadBook";
import WishBook from "../../Components/WishBook/WishBook";
import { getBookData } from "../../saveToBookStorage/saveToBookStorage";
import { getWishData } from "../../Components/saveToWishData/saveToWishData";
const ListedBook = () => {
  const [toggle, setToggle] = useState(0);

  const [readBook, setReadBook] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  // sorting state here
  const [rating, setRating] = useState([]);
  const [number, setNumber] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    setWishBook(getWishData());
  }, []);
  useEffect(() => {
    setReadBook(getBookData());
    setRating(getBookData());
    setNumber(getBookData());
    setYear(getBookData());
  }, []);

  // sorted validation start

  const handleRating = () => {
    const bookRating = rating.sort((a, b) => b.rating - a.rating);
    setReadBook(bookRating);
  };

  const handleNumber = () => {
    const bookRating = number.sort((a, b) => b.totalPages - a.totalPages);
    setReadBook(bookRating);
  };
  const handleYear = () => {
    const bookRating = year.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setReadBook(bookRating);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-[#f3f3f3] rounded-[10px] mt-8">
        <h1 className="text-2xl font-bold text-center p-6">Books</h1>
      </div>
      <div className="text-center my-8">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-lg text-white">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content text-[#656565] font-semibold z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a
                onClick={() => {
                  handleRating();
                }}
              >
                Rating
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleNumber();
                }}
              >
                Number of Pages
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleYear();
                }}
              >
                Publisher year
              </a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center -mx-4 overflow-x-auto my-8 overflow-y-hidden sm:justify-start flex-nowrap text-black">
        <button
          onClick={() => setToggle(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            toggle === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 text-black font-bold`}
        >
          <span className="text-lg font-medium">Read Books</span>
        </button>
        <button
          onClick={() => setToggle(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            toggle === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 text-black font-bold`}
        >
          <span className="text-lg font-medium">Wishlist Books</span>
        </button>
      </div>
      {toggle === 0 ? (
        <ReadBook readBook={readBook} />
      ) : (
        <WishBook wishBook={wishBook} />
      )}
    </div>
  );
};

export default ListedBook;
