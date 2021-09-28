import React from 'react';


const NutritionCard = ({ image, title }) => {
    return(
        <>
            <div className=" bg-white shadow rounded-md h-full px-3 md:px-3  w-24  md:w-56">
                <div className="w-full h-12  md:h-36">
                    <img 
                        src= {image}
                        alt="food"
                        className="w-full h-full rounded-t-md object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-sm text-center font-light my-1 md:text-xl ">{title}</h3>
                </div>

            </div>
        </>
    );
};



const NutritionCarousalCard = (props) => {
    return (
        <>
           <NutritionCard { ...props } /> 
           
        </>
    );
};

export default NutritionCarousalCard;
 