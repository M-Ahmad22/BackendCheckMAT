const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const requestPricingRoutes = require("./Routes/requestPricingRoutes");
const applicationRoutes = require("./Routes/applicationRoutes");
const bookingRoutes = require("./Routes/bookCallRoutes");
const getQuoteRoutes = require("./Routes/getQuoteRoutes");
const authRoutes = require("./Routes/authRoutes");

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

app.use("/api/request-pricing", requestPricingRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api", applicationRoutes);
app.use("/api", bookingRoutes);
app.use("/api", getQuoteRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
