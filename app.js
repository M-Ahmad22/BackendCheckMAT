const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo db connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Backend API is running.");
});

try {
  console.log("Setting up routes...");

  app.use("/api/applications", require("./Routes/applicationRoutes"));
  console.log("/api/applications route loaded");

  app.use("/api/book-call", require("./Routes/bookCallRoutes"));
  console.log("/api/book-call route loaded");

  app.use("/api/get-quote", require("./Routes/getQuoteRoutes"));
  console.log("/api/get-quote route loaded");

  app.use("/api/request-pricing", require("./Routes/requestPricingRoutes"));
  console.log("/api/request-pricing route loaded");
} catch (err) {
  console.error("Error while loading routes:", err);
}

module.exports = app;
