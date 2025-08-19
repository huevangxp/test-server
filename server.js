1111 import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./src/routes/routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json())
app.use('/api/v1', router)
 

 

app.listen(2000, () => console.log("Server is running on port 2000"))
