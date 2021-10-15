import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";


//components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([
       /* {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/3/18140523/cfbda35382090ddbf5128a946c235f74_o2_featured_v2.jpg"
            ],
            name: "The Belgian Waffle Co.",
            cuisine: ["Desserts", "Beaverages"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456-2",
            photos: [
                "https://b.zmtcdn.com/data/pictures/0/17881760/4840b7cbaad426810e6920e3ad201da8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "FreshMenu",
            cuisine: ["Fast Food", "Continental"],
            averageCost: 200,
            isPro: true,
            isOff: 70,
            durationOfdelivery: 40,
            restaurantReviewValue: 4.3,
        },
        {
            _id: "123456-3",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/5/18140605/60e2168970340588c9e8e710ac1c24e7_o2_featured_v2.jpg?output-format=webp"
            ],
            name: "Deliure",
            cuisine: ["Bakery", "Mithai"],
            averageCost: 400,
            isPro: true,
            isOff: 20,
            durationOfdelivery: 30,
            restaurantReviewValue: 4.2,
        }, */
    ]); 

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants
    );

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);
   

    return (
        <>
            <DeliveryCarousal />
            <h1 className="text-2xl md:font-semibold mb-2 mt-4">
                Delivery Restaurants in Vijay Nagar
            </h1>
            {/* <Brand />  */}
            <div className="flex justify-between flex-wrap">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} 
                        key={restaurant._id} 
                        whereIsthisres="asf"
                    />
                ))}
            
           
            </div>
        </>
    );
};

export default Delivery;
