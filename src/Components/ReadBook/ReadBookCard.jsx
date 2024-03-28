import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { MdOutlineInsertPageBreak } from "react-icons/md";
const ReadBookCard = ({ bookCard }) => {
  const {
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    image,
    id,
  } = bookCard;

  return (
    <div>
      <div className="card border-2">
        <div className="card-body text-center">
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="bg-[#f3f3f3] rounded-[15px]">
              <div className="p-10">
                <img className="h-[220px]" src={image} alt="" />
              </div>
            </div>
            <div className="text-left space-y-6">
              <h1 className="text-2xl font-bold">{bookName}</h1>
              <p className="text-base text-[#646464] font-semibold">
                By: {author}
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <span className="text-lg text-[#424242] font-semibold">
                  Tag
                </span>
                <button className="text-base mr-3 px-4 py-2 font-semibold bg-[#f4fcf3] rounded-full text-[#23BE0A]">
                  #Young Adult
                </button>
                <button className="text-base px-4 py-2 font-semibold bg-[#f4fcf3] rounded-full text-[#23BE0A]">
                  #Identity
                </button>
                <IoLocationOutline size={20} />{" "}
                <p className="text-sm text-[#646464] font-semibold">
                  Year of Publishing: {yearOfPublishing}
                </p>
              </div>

              <div className="flex items-center">
                <p className="flex gap-2 text-[#626262] items-center">
                  <FiUsers />
                  Publisher: {publisher}
                </p>
                <p className="flex items-center gap-2 text-[#626262]">
                  <MdOutlineInsertPageBreak />
                  Page: {totalPages}
                </p>
              </div>
              <div className="divider"></div>
              <div className="space-x-2">
                <button className="bg-[#e0eeff] text-sm text-[#328EFF] px-6 rounded-full py-3 font-semibold">
                  Category: {category}
                </button>
                <button className="bg-[#fff3e1] text-sm text-[#FFAC33] px-6 rounded-full py-3 font-semibold">
                  Rating: {rating}
                </button>
                <NavLink
                  to={`/bookDetails/${id}`}
                  className="bg-[#23BE0A] text-sm text-white px-6 rounded-full py-3 font-semibold"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
