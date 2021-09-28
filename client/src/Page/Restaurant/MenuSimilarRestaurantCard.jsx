import React from 'react';
import {TiStar} from "react-icons/ti";

const MenuSimilarRestaurantCard = (props) => {
    return (
        <>
        <div className="mx-2">
            <div className=" bg-white shadow rounded-md ">
                <div className="w-full h-48">
                    <img 
                        src= {props.image}
                        alt="food"
                        className="w-full h-full rounded-t-md object-cover"
                    />
                </div>
                <div className="flex flex-col gap-2 p-3">
                    <h3 className=" font-semibold text-lg ">{props.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1 ">
                            <span className="flex items-center gap-1 bg-green-700 
                                text-white px-2 py-1 text-xs rounded">
                                30
                                <TiStar />
                            </span>
                            Dining
                        </span>
                        <span className="w-2 h-6 border-r border-gray-500"/>
                        <span className="flex items-center gap-1">
                            <span className="flex items-center gap-1 bg-green-700 
                                text-white px-2 py-1 text-xs rounded">
                                30
                                <TiStar />
                            </span>
                            Delivery
                        </span>
                    </div>
                    <h4>Pizza, Fast food, Italian</h4>
                </div>

            </div>
        </div>
        </>
    );
};

export default MenuSimilarRestaurantCard;
