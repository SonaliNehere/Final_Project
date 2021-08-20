import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
    {
    fullname: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String},
    address: [{detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: String}],
},
{
    timestamps: true, //give created and updated time
}
);

//can't use arrow function
UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({user: this._id.toString() }, "ZomatoApp");
};

UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
    //check whether email exist
    const checkUserByEmail = await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findOne({phoneNumber});

    if(checkUserByEmail || checkUserByPhone){
        throw new Error("User already exist! ");
    }

    //if email or phoneNumber doesn't exist
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({email, password}) => {
    //check whether email exist
    const user = await UserModel.findOne({email});
    
    if(!user) throw new Error("User do not exist! ");
    
    //compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password );

    if(!doesPasswordMatch) throw new Error("invalid password");

    return user;

};


//next method will be available from mongoose
//pre is something that is use to run your logic/function at particular stage of mongoose
//we are running this logic at stage save 
UserSchema.pre("save", function(next) {
    const user = this;

    //checking is password is modified
    if(!user.isModified("password")) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error);

        //hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error) return next(error);

            //asigning the hashed password
            user.password = hash;
            return next();
        });
    });
});



export const UserModel = mongoose.model("Users", UserSchema);