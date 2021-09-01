// [LOAD PACKAGES]
const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
   // CONNECTED TO MONGODB SERVER
   console.log("Connected to mongodb server");
});

mongoose.connect(process.env.MONGODB_CONNECT_URI);

const Counter = require("./models/counter");

// [CONFIGURE APP TO USE bodyParser]
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// [CONFIGURE SERVER PORT]
const port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
const router = require("./routes")(app, Counter);

// [RUN SERVER]
app.listen(port, function () {
   console.log("Express server has started on port " + port);
});
