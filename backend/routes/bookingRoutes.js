import express from "express";

import {createBooking, getBookings} from "../controllers/bookingControllers.js";

import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", createBooking);

router.get("/", auth, getBookings);

export default router;