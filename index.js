import express from "express";
import indexRoutes from "./routes";
import userRoutes from "./routes/users";
import connectDB from "./config/database";
require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use("/", indexRoutes);
app.use("/users", userRoutes);

app.listen(port, () => console.log(`Server started at port ${port}`));
