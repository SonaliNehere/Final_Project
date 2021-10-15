import React from 'react';
import {BsStarFill, BsStarHalf,BsStar} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
 
const NutritionCard = (props) => {
    return (
        <div className="p-4 w-full  md:w-1/2 lg:w-1/3 ">
            <div className="w-full h-full bg-white rounded-2xl shadow-lg">
            <div className={`w-full h-56 rounded-t-2xl bg-${props.bg}-100`}>
                <img src= {props.image}
                    alt= "suppliments"
                    className="w-full h-full"
                    />
            </div>
            <div className="p-3 flex flex-col gap-3">
                <div className="flex mt-4 items-center gap-3">
                    <div className="w-4 h-4">
                        <img src= "https://clipground.com/images/veg-logo-png-6.png"
                        alt= "veg"
                        className="w-full h-full"
                        />
                    </div>
                    <ReactStars
                        count={5}
                        //onChange={ratingChanged}
                        size={16}
                        isHalf={true}
                        value={3}
                        emptyIcon={<BsStar />}
                        halfIcon={<BsStarHalf />}
                        fullIcon={<BsStarFill />}
                        activeColor="#ffd700"
                    />
                    <span className="text-gray-400">15</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700">
                    Sleep - Timed Release Melatonin
                </h3>
                <p className="text-sm font-light text-gray-400">
                    An advanced timed-release formula that helps you fall asleep faster and wake up feeling fresher
                </p>
                <div className="mt-2">
                    <hr />
                </div>
                <div>
                    <span>
                        {" "}
                    <s className="text-gray-400 font-light mr-3">₹500 </s>{" "}
                    <strong >₹200</strong>
                    </span>
                    <p className="text-gray-400 font-light mr-3 ">monthly pack - 30 capsules</p>
                </div>
 
            </div>
            </div>
        </div>
    );
};

export default NutritionCard;
