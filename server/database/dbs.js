import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.USERN;
const KEY = process.env.KEYU;
const DBS = `mongodb+srv://${USERNAME}:${KEY}@cluster0.lvewmin.mongodb.net/TODOLIST?retryWrites=true&w=majority`;

const Conn = () => {

    mongoose.connect(DBS , {useNewUrlParser : true , });

    mongoose.connection.on('connected' , () => {
        console.log("Database is connected");
    });
    mongoose.connection.on('disconnected' , () => {
        console.log("Database is disconnected");
    });
    mongoose.connection.on('error' , () => {
        console.log(`Can not connected ${error.message}`);
    });
}

export default Conn;
