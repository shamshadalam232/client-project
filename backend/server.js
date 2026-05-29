import dotenv from "dotenv";

dotenv.config();

import upload from "./middlewares/upload.js"

import express from "express";

import cors from "cors";

import connectDB from "./config/db.js";

import adminRoutes from "./routes/adminRoutes.js";

import profileRoutes from "./routes/profileRoutes.js";

import bookingRoutes from "./routes/bookingRoutes.js";


const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/bookings", bookingRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/profiles", profileRoutes);

export default app;