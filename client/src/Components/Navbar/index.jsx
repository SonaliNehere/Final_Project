import React, {useState} from "react";
import { FaUserAlt} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearchLine  } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {gravatar} from "gravatar";


//components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import UserDropdown from "./UserDropdown";

//redux action
import { signOut } from "../../Redux/Reducer/Auth/Auth.action";


const MobileNav = ({ SignIn, SignUp }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();
    const reduxState = useSelector((global) => global.user.user);
    const signOutHandler = () => dispatch(signOut());
  
    
    return(
        <div className="flex w-full items-center justify-between  lg:hidden">
            <div className="w-28">
                <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo" 
                    className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-3 relative">
                <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
                    Use App
                </button>
                {
                    reduxState?.user?.fullname ? (
                        <>
                        <div onClick={() => setIsDropDownOpen((prev) => !prev)} 
                            className="border border-gray-300 p-2 text-zomato-400
                             rounded-full w-20 h-20 "
                        >
                            {/* <FaUserAlt/> */}
                            <img src={gravatar.url(reduxState?.user?.email)}
                                alt={reduxState?.user?.email} 
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        {isDropDownOpen && (
                            <div className="absolute shadow-lg py-3 -bottom-20 
                                -right-4 w-full z-20 bg-white flex flex-col gap-2">
                                <button onClick={signOutHandler}> Sign Out </button>
                            
                            </div>
                        )}
                        </>
                    ) : (
                        <>
                        <span onClick={() => setIsDropDownOpen((prev) => !prev)}
                         className="border border-gray-300 p-2 text-zomato-400
                          rounded-full ">
                            <FaUserAlt/>
                        </span>
                        {isDropDownOpen && (
                            <div className="absolute shadow-lg py-3 -bottom-20 
                                -right-4 w-full z-20 bg-white flex flex-col gap-2">
                            <button onClick={SignIn}> Sign In </button>
                            <button onClick={SignUp} > Sign Up </button>
                            </div>
                        )}
                    
                        </>
                    )
                }
                
            </div>
        </div>

    );
};

const LargeNav = ({ SignIn, SignUp }) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();
    const reduxState = useSelector((global) => global.user.user);
    const signOutHandler = () => dispatch(signOut());
  
    return(
        <>
        <div className="hidden lg:inline container px-20 mx-auto  ">
            <div className="hidden w-full items-center justify-around gap-4 lg:flex ">
                <div className="w-28">
                 <img
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                    alt="logo" 
                    className="w-full h-full"
                 />
                </div>
                <div className="w-3/4 flex items-center gap-3 w-full bg-white 
                    shadow-md p-3 border border-gray-200 rounded">
                    <div className="flex items-center gap-2 border-r-2 
                        border-gray-300 pr-2">
                        <span className="text-zomato-400">
                            <HiLocationMarker />
                        </span>
                        <input 
                            type="text" 
                            placeholder="Mumbai"
                            className="w-full focus:outline-none"
                        />
                        <IoMdArrowDropdown />
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <RiSearchLine />
                        <input 
                            type="search" 
                            placeholder="Search for restaurant, cuisine or a dish"
                            className="w-full focus:outline-none"
                        />

                    </div>
                </div>
                {
                    reduxState?.user?.fullname ? (
                        <div className="relative w-20">
                        <div onClick={() => setIsDropDownOpen((prev) => !prev)} 
                            className="border border-gray-300 p-2 text-zomato-400
                             rounded-full w-full h-20 "
                        >
                            {/* <FaUserAlt/> */}
                            <img src={gravatar.url(reduxState?.user?.email)}
                                alt={reduxState?.user?.email} 
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        {setIsDropDownOpen && (
                        <div className="absolute shadow-lg py-3  -right-4 w-full
                         z-30 bg-white flex flex-col gap-2">
                            <button onClick={signOutHandler}> Sign Out </button>
                        </div>
                        )}
                        
                        </div>
                    ): (
                        <div className="flex ml-28 gap-4 ">
                        <button 
                            onClick={SignIn} 
                            className="text-gray-500 text-xl hover:text-gray-800"
                        >
                            Login
                        </button>
                        <button 
                            onClick={SignUp} 
                            className="text-gray-500 text-xl hover:text-gray-800"
                        >
                            Signup
                        </button>
                    </div>
                    )
                }

                
            </div>
        </div>
        
        </>
    );
};

const Navbar= () => {
    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInmodal = () => setOpenSignin(true);
    const openSignUpmodal = () => setOpenSignup(true);
    return(
    <>
        <SignIn isOpen={openSignin} setIsOpen={setOpenSignin}/>
        <SignUp isOpen={openSignup} setIsOpen={setOpenSignup}/>
        <nav className="p-4 flex bg-white shadow-md w-full items-center 
            lg:shadow-none ">
            <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
            <LargeNav SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
        </nav>
    </>
    );
};

export default Navbar;