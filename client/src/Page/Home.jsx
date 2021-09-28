import React from 'react';
import {useParams} from "react-router-dom";

//components
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';



const Home = () => {
    const { type } = useParams();
    return (
        <>
          {/* {type}   */}
          <div className="my-5" >
            { type === "delivery" && <Delivery /> } {/* work like if */}
            { type === "dining" && <Dining /> }
            { type === "night" && <NightLife /> }
            { type === "nutrition" && <Nutrition /> }
          </div> 
        </>
    );
};

export default Home;
