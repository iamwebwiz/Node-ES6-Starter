import express from "express";
import router from "./routes";
import connectDB from "./config/database";
require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use("/", router);

app.listen(port, () => console.log(`Server started at port ${port}`));
