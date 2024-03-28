import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <div className="bg-[#f3f3f3] rounded-[20px] mt-10">
            <div className="flex justify-around lg:flex-row flex-col items-center py-16">
              <div>
                <h1 className="text-5xl leading-[75px] mb-8 font-bold">
                  Books to freshen <br /> up your bookshelf
                </h1>
                <NavLink
                  to="/listedBook"
                  className="text-lg font-bold bg-[#23BE0A] px-7 py-4 text-white rounded-md"
                >
                  View The List
                </NavLink>
              </div>
              <div>
                <img src="https://i.ibb.co/jTNPzXr/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
