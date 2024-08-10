import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import { echoRouter } from "./routes/echoRouter.js";
import testRouter from "./routes/test.route.js";

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

// START EDIT - kyle - 8/10/24
app.use("/api/hello", (req, res) => {
  res.send("Hello World!");
});
// END EDIT - kyle - 8/10/24

// START ADD - kyle - 8/10/24
app.use("/api/test", testRouter);
// END ADD - kyle - 8/10/24

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
