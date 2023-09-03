import express from "express";
import Conn from "./database/dbs.js";

const app = express();

const PORT = 8000;

Conn();

app.listen(PORT , () => { console.log(`Server is running on port number ${PORT}`)});