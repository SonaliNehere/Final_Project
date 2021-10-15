import React from 'react';

const DeliverySmCard = ({ image, title }) => {
    return(
        <>
            <div className="lg:hidden bg-white shadow rounded-md w-24  md:w-56">
                <div className="w-full h-24">
                    <img 
                        src= {image}
                        alt="food"
                        className="w-full h-full rounded-t-md object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-sm text-center font-light my-1 ">
                        {title}
                    </h3>
                </div>

            </div>
        </>
    );
};

const DeliveryLgCard = ({ image, title }) => {
    return(
        <>
            <div className="hidden lg:block w-64 h-48">
                <div className="w-full h-full">
                    <img 
                        src= {image}
                        alt="food"
                        className="w-full h-full rounded-md object-cover shadow-lg"
                    />
                </div>
                <div>
                    <h3 className="text-xl  font-medium my-1 ">{title}</h3>
                </div>

            </div>
        </>
    );
};

const DeliveryCategory = (props) => {
    return (
        <>
           <DeliverySmCard { ...props } /> 
           <DeliveryLgCard { ...props } /> 
        </>
    );
};

export default DeliveryCategory;
