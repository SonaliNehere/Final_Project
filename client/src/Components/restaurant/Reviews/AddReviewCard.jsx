import React, { useState } from 'react';
import Rating from "react-rating-stars-component";


//component
import ReviewModal from './ReviewModal';

const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [reviewData, setReviewData] = useState({});

    const openModal = () => {
        if(!localStorage.zomatouser){
            return alert("please sign in to post a review");
        }
        setIsOpen(true);
    };


    //const handleRating = (value) => console.log(value);

    return (
        <>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
           <h3 className="text-xl font-medium">Rate your delivery experience</h3>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <input type="radio" name="review" id="dining"/>
                        <label htmlFor="dining">Dining</label>
                        {/* htmlFor - even if i click on label it will click */}
                        
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="review" id="delivery"/>
                        <label htmlFor="delivery">Delivery</label>
                        
                    </div>
                </div>
               
                <button onClick={openModal} className="text-zomato-400">Write a review</button>  
        </>
    );
};

export default AddReviewCard;
