const express = require("express");
const app = express();
// const connect = require("./db/connect");
var cors = require('cors')

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

require("dotenv").config();
require("express-async-errors");// for throw error
const route = require("./routes");

// middleware
app.use(cors())
app.use(express.json());

// routing
app.use("/api/v1/condition/", route.condition);
app.use("/api/v1/device/", route.deviceState);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;


const connectDB = async () => {
  try {
    // await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Server listen on port " + port + "...");
    });
  } catch (error) {
    console.log(error);
  }
};
connectDB();
