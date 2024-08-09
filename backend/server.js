import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import { echoRouter } from "./routes/echoRouter.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

const app = express();

// Middlewares
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// Routes
const version = "v1";
app.use(`/api/${version}/echo`, echoRouter);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to Database
try {
  await mongoose.connect(process.env.MONGO_URI, { dbName: "cc_db" });
  console.log("Connected to database successfully");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
