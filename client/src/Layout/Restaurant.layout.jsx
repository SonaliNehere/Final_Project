import React from 'react';
import { TiStarFullOutline } from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/restaurant/ImageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import TabContainer from '../Components/restaurant/Tabs';





const RestaurantLayout = (props) => {
    return (
        <>
        <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-20 mt-4">
            <ImageGrid 
                images={[
                    "https://b.zmtcdn.com/data/pictures/chains/3/17754673/aef90bd7bf2718ae9d8e77b0a57417ea.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/3/17754673/aef90bd7bf2718ae9d8e77b0a57417ea.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/3/17754673/aef90bd7bf2718ae9d8e77b0a57417ea.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/3/17754673/aef90bd7bf2718ae9d8e77b0a57417ea.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/3/17754673/aef90bd7bf2718ae9d8e77b0a57417ea.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"

                ]}
            />
            <RestaurantInfo 
                name="Mumbai Express"
                restaurantRating="3.5"
                deliveryRating="3.2"
                cuisine="North Indian, Fast food, Rolls, chinese"
                address="Matunga East, Mumbai"

            />
            <div className="my-4 flex flex-wrap gap-3">
               <InfoButtons isActive>
                   <TiStarFullOutline  /> Add Review
               </InfoButtons>
               <InfoButtons >
                   <RiDirectionLine  /> Direction
               </InfoButtons>
               <InfoButtons >
                   <BiBookmarkPlus  /> Bookmark
               </InfoButtons>
               <InfoButtons>
                   <RiShareForwardLine  /> Share
               </InfoButtons>
            </div>
            <div className="my-10">
                <TabContainer >
                    
                </TabContainer >
            </div>
            <div className="">
                {props.children}
            </div>
         
        </div>
        </>
    );
};

export default RestaurantLayout;
