import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="p-6">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Your Cart</h2>
              <h3 className="text-xl font-semibold">Summary</h3>
              <p className="mt-2">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="text-lg font-medium">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
