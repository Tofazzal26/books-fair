import { Toaster, toast } from "react-hot-toast";

export const getBookData = () => {
  const alreadyExisted = localStorage.getItem("book");
  if (alreadyExisted) {
    return JSON.parse(alreadyExisted);
  }
  return [];
};

export const saveToBook = (id) => {
  const stored = getBookData();
  const existed = stored.find((bookId) => bookId.id === id.id);
  if (!existed) {
    stored.push(id);
    localStorage.setItem("book", JSON.stringify(stored));
    toast.success("Add Read Successfully");
  } else {
    toast.error("Already Added Read");
  }
};
