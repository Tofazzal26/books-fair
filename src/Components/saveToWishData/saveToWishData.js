import { Toaster, toast } from "react-hot-toast";
export const getWishData = () => {
  const stored = localStorage.getItem("wish");
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
};

export const saveToWishData = (id) => {
  const wishStored = getWishData();
  const singleData = wishStored.find((wishId) => wishId.id === id.id);
  if (!singleData) {
    wishStored.push(id);
    localStorage.setItem("wish", JSON.stringify(wishStored));
    toast.success("Add Read Successfully");
  } else {
    toast.error("Already Added Read");
  }
};
