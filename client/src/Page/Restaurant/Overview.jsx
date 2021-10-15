import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector, useDispatch } from "react-redux";

//components
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import ReviewCard from '../../Components/restaurant/Reviews/ReviewCard';
import MapView from '../../Components/restaurant/MapView';
import MenuCollection from '../../Components/restaurant/MenuCollection';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';

//redux action
import { getImage } from '../../Redux/Reducer/Image/Image.action';
import { getReviews } from '../../Redux/Reducer/Reviews/review.action';


const Overview = () => {
    const [menuImage, setMenuImages] = useState({images: []});
    const [Reviews, setReviews] = useState([]);

    const { id } = useParams();
 
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

   
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
            
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => { 
                const images = [];
                data.payload.image.images.map(({ location }) => 
                    images.push(location));
                setMenuImages(images);
            });
            dispatch(getReviews(reduxState?._id)).then((data) => 
                setReviews(data.payload.reviews)
            );
        }
    }, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
        return(mapAddress?.split(",").map((item) => parseFloat(item)));
    }

    return (
        <>
            <div className="flex flex-col md:flex-row relative ">
                <div className="w-full md:w-8/12 w-100">
                    <h2 className="font-semibold text-lg md:text-2xl my-4 mx-2 ">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium mx-2">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1
                             text-zomato-400">
                                See all menu <IoMdArrowDropright /> 
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4 mx-2">
                            <MenuCollection 
                                menuTitle="menu"
                                pages="3"
                                /*image= {["https://b.zmtcdn.com/data/menus/427/49427/dbd02f1683f5e35424da60933b863d2f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                                    "https://b.zmtcdn.com/data/menus/004/35004/7cc49194ce85b51396b77eeecb53f738.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"]}  
                                    */
                                image={menuImage}
                            />
                    </div>
                    <h4 className="text-lg font-medium my-4 mx-2">Cuisine</h4>
                    <div className="flex flex-wrap gap-2 mx-2">
                        {reduxState?.cuisine.map((data) => (
                            <span className="border border-gray-600 text-blue-400
                             px-2 py-1 rounded-full">
                                {data}
                            </span>
                        ))}
                        {/*<span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">
                            Street Food
                        </span>
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">
                            North Indian
                        </span>
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">
                            Chinese
                        </span>
                        <span className="border border-gray-600 text-blue-400 px-2 py-1 rounded-full">
                            Wrap
                        </span> */}

                    </div>
                    <div className="my-4 mx-2">
                        <h4 className="text-lg font-medium">Average Cost</h4>
                        <h6>₹{reduxState?.averageCost} for one order (approx.)</h6>
                        <small className="text-gray-500">
                            Exclusive of applicable taxes and charges, if any
                        </small>
                    </div>
                    <div className="my-4 ">
                        <h4 className="text-lg font-medium mx-2">
                            Similar Restaurants
                        </h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/0/19594240/290caace5a39d17128e63288b4389de6_featured_v2.jpg?output-format=webp"
                                title="Hundo Pizza" 
                            />
                             <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/0/19594240/290caace5a39d17128e63288b4389de6_featured_v2.jpg?output-format=webp"
                                title="Hundo Pizza" 
                            />
                             <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/0/19594240/290caace5a39d17128e63288b4389de6_featured_v2.jpg?output-format=webp"
                                title="Hundo Pizza" 
                            />
                             <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/0/19594240/290caace5a39d17128e63288b4389de6_featured_v2.jpg?output-format=webp"
                                title="Hundo Pizza" 
                            />
                             <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/0/19594240/290caace5a39d17128e63288b4389de6_featured_v2.jpg?output-format=webp"
                                title="Hundo Pizza" 
                            />
                        </Slider>
                    </div>
                    <div className="mx-2">
                        <h4 className="text-lg font-medium">
                            Rate your delivery experience 
                        </h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        {Reviews.map((reviewData) =>  (
                            <ReviewCard {...reviewData}/>
                        ))}
                        
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4 mx-2">
                        <MapView 
                        title={reduxState?.name}
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatLong(reduxState?.mapLocation)}
                        address={reduxState?.address}
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-4 mx-2"> 
                       {/* <ReviewCard  />
                        <ReviewCard  />
                        <ReviewCard  />
                       <ReviewCard  /> */}
                    </div>
                </div>
                
                <aside 
                    style={{height : "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky rounded-xl top-2
                     bg-white p-3 shadow-md flex flex-col gap-4"
                >
                    <MapView 
                        title={reduxState?.name}
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatLong(reduxState?.mapLocation)}
                        address={reduxState?.address}
                    />
                </aside>
            </div>
        </>
    );
};

export default Overview;
