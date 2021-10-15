//libraries
import express, { json } from "express";
import passport from "passport";


import multer from "multer"; //it store the image in ram uploaded by user until API is
//                             done uploading to the server or aws s3 bucket


// Database modal
import { ImageModel } from "../../database/allModels";


//Utilities
import { s3Upload } from "../../Utils/AWS/s3";

//router setup
const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/*
Route     /
Des       upload given image to s3 bucket, and saves the file link to mongoose 
Params    none
Access    Public
Method    POST   */

Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        //s3 bucket options
        const bucketOptions = {
            Bucket: "shapeaizomatoweb",
            Key: file.originalname,
            Body: file.buffer,// buffer is ram
            ContentType: file.mimetype,
            ACL: "public-read", //ACL - Access Control List
        };

         
        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({uploadImage});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  
  /*
  Route     /c
  Des       Get all food based on particular category
  Params    category
  Access    Public
  Method    GET  */
  
  Router.get("/r/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const foods = await FoodModel.find({
        category: { $regex: category, $options: "i" },
      });
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  export default Router;


  