//Importing Env variables
require("dotenv").config();


//libraries
import express from "express";
import cors from "cors"; //cors - cross origin request. server should  be able to
                         // allow request other than your own server or origin
import helmet from "helmet"; //helmet is a security library gives security
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import Image from "./API/Image";
import User from "./API/user";
import Menu from "./API/menu";
import MailService from "./API/Mail";
import Payments from "./API/Payments";



//Database connection
import ConnectDB from "./database/connection.js";


const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configure
googleAuthConfig(passport);
routeConfig(passport);

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/mail", MailService);
zomato.use("/payments", Payments);
zomato.use("/menu", Menu);


zomato.get("/", (req, res) => res.json({message: "Setup success"}));

zomato.listen(4000, () => 
    ConnectDB()
    .then(() => console.log("Server is running"))
    .catch((e) =>
    console.log(e,"Server is running but database not connected")
    )
);