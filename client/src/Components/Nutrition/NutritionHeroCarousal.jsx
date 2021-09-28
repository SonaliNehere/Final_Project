import React, {useState} from 'react';
import Slider from "react-slick";


//components
import NutritionHeroCarousalCard from './NutritionHeroCarousalCard';
import { NextArrow, PrevArrow } from '../CarousalArrow';

const NutritionHeroCarousal = () => {

    const [heroBanners, setHeroBanners] = useState([
        "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
        "https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png",
        "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
        "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png",
        "https://b.zmtcdn.com/web/nutrition/assets/6070ce964372e9e39c5bf6345a7bf78c1620108789.png",
    ]);

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
       
      };

    return (
        <div className="w-full">
        <Slider {...settings}>
            {heroBanners.map((image) => (
                 <NutritionHeroCarousalCard image={image} />
            ))}
           
        </Slider>
        </div>
    );
};

export default NutritionHeroCarousal;
