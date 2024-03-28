import { IoLocationOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ChildCard = ({ childBook }) => {
  const { bookName, image } = childBook;

  return (
    <div>
      <section className="py-6 sm:py-12 text-gray-100 cursor-pointer">
        <div className="container p-6 mx-auto space-y-8">
          <div className="">
            <article className="flex flex-col bg-gray-900">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src={image}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  {bookName}
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildCard;
