import React  from 'react';
import { BsShieldLockFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import Razorpay from "razorpay";

//components
import FoodItem from '../Components/Cart/FoodItem';
import AddressList from '../Components/CheckOut/AddressList';

//redux action
import {createOrder} from "../Redux/Reducer/Order/order.action";

const Checkout = () => {
    const reduxStateCart = useSelector((global) => global.cart.cart);
    const reduxStateUser = useSelector((global) => global.user.user.user);

    const dispatch = useDispatch();

    const address = [
        {
            name: "Home",
            address: "India",
        },
        {
            name: "Gym",
            address: "India",
        },
        {
            name: "Office",
            address: "India",
        },
    ];

    const payNow = async(e) => {
        let options = {
        key: "rzp_test_erITWzQfolL9Hj",
        amount:
        reduxStateCart.reduce((acc, curVal) => acc + curVal.totalPrice, 0) * 100,
        currency: "INR",
        name: "zomato Clone",
        description: "Food Payment",
        image:
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",

        handler: () => {
        alert("Payment Done");
        },
        prefill: {
        name: reduxStateUser.fullname,
        email: reduxStateUser.email,
        },
        theme: { color: "#e23744" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
    };

    return (
        <>
        
            <div className="my-3 flex flex-col gap-3 items-center">
                <h1 className="text-xl text-center md:text-2xl font-bold">
                    Checkout
                </h1>
                <div className="w-full md:w-3/5  py-3 rounded-lg shadow-lg bg-white
                 flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Summary</h3>
                    <div className="w-full flex flex-col items-center gap-2">
                        <h5 className="text-base tracking-wider">ORDER FROM</h5>
                        <div className="w-full flex flex-col items-center text-gray-400">
                            <h4>Domino's Pizza</h4>
                            <small>GT World Mall, S.S. Road, Mumbai</small>
                        </div>
                        <div className="my-4 h-32 w-full flex flex-col gap-2 
                        md:w-3/5 overflow-y-scroll px-4 ">
                            {reduxStateCart.map((food) => (
                                  <FoodItem key={food._id} {...food } />
                            ))}
                            {/*<FoodItem name="Pizza" quantity={4} price={200}/>
                            <FoodItem name="Pizza" quantity={4} price={200}/>
                            <FoodItem name="Pizza" quantity={4} price={200}/>
                            <FoodItem name="Pizza" quantity={4} price={200}/> */}
                        </div>
                        <div className="w-full flex flex-col gap-3 md:w-3/5 ">
                            <h4 className="text-xl font-semibold">Choose Address</h4>
                            <AddressList address={address} />
                            
                        </div>
                    </div>
                    <button onClick={payNow}
                        className="flex items-center justify-center gap-2 w-full 
                        px-4 md:w-4/5 h-14 my-4 md:my-8  text-white font-medium 
                        text-lg bg-zomato-400 rounded-lg">
                        Pay Securely <BsShieldLockFill />
                    </button>
                </div>
            </div>

        
            
        </>
    );
};

export default Checkout;
