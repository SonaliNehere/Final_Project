//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//Models
import { UserModel } from "../../database/user";

//Validation
import { ValidateSignin, ValidateSignup } from "../../validation/auth";


const Router = express.Router();

/* 
Route  - /signup
Des    - Signup with email and password
Params - none
Access - Public
Method - POST 
*/
Router.post("/signup", async(req, res) => {
  //const {error} = ValidateSignup(req.body.credentials); synchronous version
  //if(error) return res.status(500).json({error});
    try{
      await ValidateSignup(req.body.credentials);
        //const { email, phoneNumber } = req.body.credentials;

        await UserModel.findByEmailAndPhone(req.body.credentials);
        //await UserModel.findByEmailAndPhone(email, phoneNumber);


        /*
        //hash password
        const bcryptSalt = await bcrypt.genSalt(8); //8 are no. of rounds means password will encrypted 8 times

        const hashedPassword = await bcrypt.hash(password, bcryptSalt); //encrypt password */

        //save to DB
        const newUser = await UserModel.create(req.body.credentials);

        //generate JWT auth token
        const token = newUser.generateJwtToken();
        //const token = jwt.sign({user: {fullname, email } }, "ZomatoApp");

        //return
        return res.status(200).json({token, status: "success"});

    }catch(error){
        return res.status(500).json({error: error.message });
    }
});

/*
Route     /signin
Des       Signin with email and password
Params    none
Access    Public
Method    POST  
*/
Router.post("/signin", async (req, res) => {
    try {
      await ValidateSignin(req.body.credentials);
      const user = await UserModel.findByEmailAndPassword(req.body.credentials);
  
      const token = user.generateJwtToken();
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route     /google
Des       google Signin 
Params    none
Access    Public
Method    POST  
*/
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [ //scope is permission for google API to get details of profile and email
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route     /google/callback
Des       Google Signin Callback
Params    none
Access    Public
Method    GET  
*/
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);



export default Router;


