import mongoose from "mongoose";

export default async () => {
    return await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,

    });
}; //if i run this function mongoose database will connected