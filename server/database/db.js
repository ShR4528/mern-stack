import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


export const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@shamil.ghcttqo.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on("connected", () => {
        console.log("Database connect")
    })

    mongoose.connection.on("disconnect", () => {
        console.log("Database disconnect")
    })

    mongoose.connection.on("error", () => {
        console.log("Error while connectingwith the database", error.mesage)
    })

}

export default Connection;