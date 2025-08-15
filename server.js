import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import router from "./src/routes/routes.js";
import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
dotenv.config();

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json({limit: '5mb', extended: true, parameterLimit: 5000}))
app.use(bodyParser.urlencoded({limit: '5mb', extended: true, parameterLimit: 5000}))

app.use(helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: false,
    referrerPolicy: false,
    dnsPrefetchControl: false,
    frameguard: false,
    hidePoweredBy: false,
    hsts: false,
    noSniff: false,
    xssFilter: false,
    
}
))

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     // if no token and token expire return error here
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).json({
//             success: false,
//             error: "No token provided"
//         });
//     }

//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decodedToken) {
//         return res.status(401).json({
//             success: false,
//             error: "Invalid token"
//         });
//     }

//     req.user = decodedToken;
    
//     next();
// })


app.use('/api/v1', router)
 

 

app.listen(2000, () => console.log("Server is running on port 2000"))