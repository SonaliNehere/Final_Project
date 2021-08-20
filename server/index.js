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

//microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
//import Image from "./API/Image;

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

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
//zomato.use("/image", Image);

zomato.get("/", (req, res) => res.json({message: "Setup success"}));

zomato.listen(4000, () => 
    ConnectDB()
    .then(() => console.log("Server is running"))
    .catch((e) =>
    console.log(e,"Server is running but database not connected")
    )
);