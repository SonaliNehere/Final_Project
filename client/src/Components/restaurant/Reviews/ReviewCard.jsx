import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
    return (
        <>
            <div className="flex flex-col gap-3 my-3" >
                <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-3" >
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img 
                            src="https://b.zmtcdn.com/data/user_profile_pictures/518/d046f199ee4330ddf2e41dc731830518.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                            alt="avatar"
                            className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <h3 className="text-lg font-semibold ">
                            Sonali Nehere 
                            </h3>
                            <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                        </div>
                    </div>
                </div>
                    <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">Follow</button>
                </div>
               
                <div>
                    <div className="flex items-center gap-3 my-1">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                            3 <TiStarFullOutline />
                        </span>
                        <h5 className="font-regular uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>
                    </div>
                    <div classname="w-full">
                        <p className="text-gray-600 font-light w-full text-base">
                        Food presentation quality good value timely service
                        Ordered Dutch chocolate for my brother's birthday and they all enjoyed the cake.
                        It had less cream which is how we prefer the caked to be. The cake had rich taste chocolate and it was moist.
                        Will surely order more from here.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;
