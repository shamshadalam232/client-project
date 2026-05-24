import Booking from "../models/Booking.js";

export const createBooking =
async (req, res) => {

  try {

    const booking =
      await Booking.create({

        ...req.body,

        time:
          new Date().toLocaleString(),

      });

    res.json(booking);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getBookings =
async (req, res) => {

  try {

    const bookings =
      await Booking.find()
      .sort({ createdAt: -1 });

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};