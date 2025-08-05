ກກກກ const express = require("express");
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require('./src/routes/routes');

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json())

app.use('/api/v1', router)


app.listen(2000, () => console.log("Server is running on port 2000"))
