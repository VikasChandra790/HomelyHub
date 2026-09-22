import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import {router} from "./routes/userRoutes.js"
import { propertyRouter } from "./routes/propertyRouter.js";
import { bookingRouter } from "./routes/bookingRouter.js";
import { tripRouter } from "./routes/tripRouter.js";


import connectDB from "./utils/db.js";

dotenv.config();

const app = express();

//express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json({limit:"100mb"})); 

//urlencoded is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({limit:"100mb", extended:true})); 

//cookieParser is a built-in middleware function in Express. It parses Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());

app.use(cors({
    origin:process.env.ORIGIN_ACCESS_URL,
    credentials:true
}))

const port = process.env.PORT 

app.get("/", (req, res) => {
    res.send("Homelyhub server is running");
});

app.use("/api/v1/rent/user",router)
app.use("/api/v1/rent/listing",propertyRouter)
app.use("/api/v1/rent/user/booking", bookingRouter)
app.use("/api/v1/rent/trip", tripRouter)

connectDB(); // Connect to MongoDB


app.listen(port, () => {
    console.log(`App is running on port no: ${port}`);
}); 