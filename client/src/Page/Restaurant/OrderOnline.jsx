import React from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";


//components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import FoodItem from '../../Components/restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/restaurant/Order-Online/FoodList';
import MenuCollection from '../../Components/restaurant/Order-Online/MenuListContainer';
//import MenuCollection from '../../Components/restaurant/MenuCollection';


const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex ">
                <aside className="hidden md:flex flex-col gap-3 border-r  border-gray-200  h-screen w-1/4">
                    <MenuCollection/>
                    <MenuCollection/>
                   
                </aside>
                <div className="w-full h-screen md:w-3/4 px-4">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500"> 
                            < AiOutlineCompass/> Live Track Your Order | < BiTimeFive/> 45 Min
                        </h4>
                    </div>
                    <section className="h-screen overflow-y-scroll flex flex-col gap-3 md:gap-5">
                        <FoodList 
                            title="Recommended"
                            items={[
                                {
                                    price:"1000",
                                    rating:3,
                                    description:"In this most enigmatic & treasured recipe of Behrouz, immaculatel spiced fresh, succulent mutton pieces are layered with basmati & then slow-cooked on a charcoal fire.",
                                    title:"Yummy Food",
                                    image:
                                        "https://b.zmtcdn.com/data/dish_photos/d26/6b8f857ce3dcdca357bb5ced43414d26.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
                                    price:"1000",
                                    rating:3,
                                    description:"In this most enigmatic & treasured recipe of Behrouz, immaculatel spiced fresh, succulent mutton pieces are layered with basmati & then slow-cooked on a charcoal fire.",
                                    title:"Yummy Food",
                                    image:
                                        "https://b.zmtcdn.com/data/dish_photos/d26/6b8f857ce3dcdca357bb5ced43414d26.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
                                    price:"1000",
                                    rating:3,
                                    description:"In this most enigmatic & treasured recipe of Behrouz, immaculatel spiced fresh, succulent mutton pieces are layered with basmati & then slow-cooked on a charcoal fire.",
                                    title:"Yummy Food",
                                    image:
                                        "https://b.zmtcdn.com/data/dish_photos/d26/6b8f857ce3dcdca357bb5ced43414d26.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                
                            ]}
                        />
                        
        
        
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
            
        </>
    );
};

export default OrderOnline;
