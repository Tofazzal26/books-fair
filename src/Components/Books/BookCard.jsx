import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { TiStarOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, bookName, author, rating, tags, id, category } = book;

  return (
    <div>
      <div>
        <NavLink to={`/bookDetails/${id}`}>
          <Card className=" h-full overflow-hidden cursor-pointer shadow-none border-2">
            <div className="p-6">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <div className="bg-[#f3f3f3] rounded-[15px]">
                  <div className="flex justify-center items-center">
                    <img className="h-[200px] my-10" src={image} alt={image} />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div>
                  <button className="text-base mr-3 px-4 py-2 font-semibold bg-[#f4fcf3] rounded-full text-[#23BE0A]">
                    {tags[0]}
                  </button>
                  <button className="text-base px-4 py-2 font-semibold bg-[#f4fcf3] rounded-full text-[#23BE0A]">
                    {tags[1]}
                  </button>
                </div>
                <Typography variant="h4" color="blue-gray">
                  <span className="my-5">{bookName}</span>
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  By : {author}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  <Tooltip content="Tania Andrew">
                    <h2 className="text-2xl font-medium">{category}</h2>
                  </Tooltip>
                </div>
                <Typography className="font-normal">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-medium">{rating}.00</h2>
                    <TiStarOutline size={30} />
                  </div>
                </Typography>
              </CardFooter>
            </div>
          </Card>
        </NavLink>
      </div>
    </div>
  );
};

export default BookCard;
