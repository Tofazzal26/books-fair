import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBookData from "./../../Hook/useBookData";
import { Toaster, toast } from "react-hot-toast";
import {
  getBookData,
  saveToBook,
} from "../../saveToBookStorage/saveToBookStorage";
import { saveToWishData } from "../saveToWishData/saveToWishData";
const BookDetails = () => {
  const { id } = useParams();

  const [bookDetails, setBookDetails] = useState([]);
  const { bookData, loading } = useBookData();
  useEffect(() => {
    const single = bookData.find((book) => book.id === +id);
    setBookDetails(single);
  }, [bookData, id]);

  const handleBook = (book) => {
    saveToBook(book);
  };

  const handleWish = (wish) => {
    const readData = getBookData();
    const alreadyRead = readData.find((readId) => readId.id === wish.id);
    if (!alreadyRead) {
      saveToWishData(wish);
    } else {
      toast.error("already read");
    }
  };

  const {
    bookName,
    id: idx,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
  } = bookDetails || {};

  return (
    <div className="mt-12">
      <div className="container mx-auto">
        <div>
          <div className="flex gap-8">
            <div className="bg-[#f3f3f3] rounded-[15px]">
              <div className="py-8">
                <img className="h-[600px] w-[2000px]" src={image} alt="" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{bookName}</h1>
              <p className="text-lg font-medium">By : {author}</p>
              <div className="divider"></div>
              <p className="text-lg font-medium">{category}</p>
              <div className="divider"></div>
              <h2 className="text-lg font-bold mb-4">
                Review: <span className="font-normal">{review}</span>
              </h2>
              <div>
                <span className="text-lg font-bold mr-4">Tag</span>
                <button className="text-base mr-3 px-4 py-2 font-semibold bg-[#f4fcf3] rounded-full text-[#23BE0A]">
                  #Young Adult
                </button>
                <button className="text-base px-4 py-2 font-semibold bg-[#f4fcf3] rounded-full text-[#23BE0A]">
                  #Identity
                </button>
              </div>
              <div className="divider"></div>
              <div className="flex items-center gap-24">
                <p className="text-base font-medium text-[#595959]">
                  Number of Pages:
                </p>
                <p className="text-lg font-bold mr-4">{totalPages}</p>
              </div>
              <div className="flex items-center gap-24">
                <p className="text-base font-medium text-[#595959]">
                  Publisher:
                </p>
                <p className="text-lg font-bold mr-4">{publisher}</p>
              </div>
              <div className="flex items-center gap-24">
                <p className="text-base font-medium text-[#595959]">
                  Year of Publishing:
                </p>
                <p className="text-lg font-bold mr-4">{yearOfPublishing}</p>
              </div>
              <div className="flex items-center gap-32">
                <p className="text-base font-medium text-[#595959]">Rating:</p>
                <p className="text-lg font-bold mr-4">{rating}.0</p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handleBook(bookDetails)}
                  className="text-lg mr-4 border-gray-400 font-semibold border px-6 py-3 rounded-md"
                >
                  Read
                </button>
                <button
                  onClick={() => handleWish(bookDetails)}
                  className="px-6 py-3 text-lg font-semibold rounded-md text-white bg-[#50B1C9]"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default BookDetails;
