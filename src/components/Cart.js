import {useSelector} from "react-redux";
import {clearCart} from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold" >Cart</h1>
            <div className="w-1/2 mx-auto ">
               <button
                 className="p-2 m-2 bg-red-800 text-white rounded-lg flex "
                 onClick={handleClearCart}
                 >
                    Clear Cart
                 </button>
                 {cartItems.length === 0 && (
                    <h1> Cart is Empty. Add Items to the cart!!</h1>
                    )}
               <ItemList items={cartItems} />
            </div>
        </div>
    );
}
export default Cart;