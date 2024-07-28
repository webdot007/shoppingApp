import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md mr-4" />
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-gray-800 font-medium mr-4">${item.price.toFixed(2)}</p>
        <button
          onClick={removeFromCart}
          className="flex items-center text-red-500 hover:text-red-700 focus:outline-none"
        >
          <FcDeleteDatabase size={24} className="mr-1" />
          <span className="hidden md:inline">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
