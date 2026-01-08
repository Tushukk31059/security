const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
require("dotenv").config();
const {MONGO_URL,PORT} = process.env;
app.use(cors({ origin: process.env.VERCEL_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,}))
app.use(cookieParser());
app.use(express.json());
app.use("/",authRoute)
mongoose.connect(MONGO_URL).then(() => console.log("Mongodb is connected successfully")).catch((err) => console.error(err))
app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`)
});

