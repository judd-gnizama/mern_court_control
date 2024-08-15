import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import testRouter from "./routes/test.route.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();

// Middlewares
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
const corsOptions = {
  origin: FRONTEND_URL,
  methods: "GET, POST, PUT, PATCH, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Routes

// START EDIT - kyle - 8/10/24
app.use("/", (req, res, next) => {
  res.send("Server is up and running!");
  next();
});
// END EDIT - kyle - 8/10/24

// START ADD - kyle - 8/10/24
app.use("/api/test", testRouter);
// END ADD - kyle - 8/10/24

// Connect to Database
try {
  await mongoose.connect(process.env.MONGO_URI, { dbName: "cc_db" });
  console.log("Connected to database successfully.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
