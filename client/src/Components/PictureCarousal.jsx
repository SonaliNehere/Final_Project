import React from 'react';
import {IoMdArrowDropright} from "react-icons/io";

const PictureCarousalCard = () => {
    return (
        <>
            <div className="w-full h-64 relative px-4 overflow-hidden">
                <div className="w-full h-full relative">
                <img 
                    src= "https://b.zmtcdn.com/data/pictures/0/19831580/fbd1e3727d13ed3ab8802b213c4c6b47.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    alt= "food"
                    className= "w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
                />
                
                
                <div
                    className="absolute inset-0 w-full h-full rounded-lg"
                    style={{
                        background:
                            "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                    }}
                />
                </div>
                <div className="w-full absolute bottom-0 text-white left-8 bottom-2 ">
                    <h4 className="z-10 ">Onam Special</h4>
                    <h6 className="z-10 flex items-center">15 Places <IoMdArrowDropright /></h6>
                </div>
            </div>
        </>
    );
};

export default PictureCarousalCard;
