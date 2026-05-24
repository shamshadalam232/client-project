import mongoose from "mongoose";

const bookingSchema =
new mongoose.Schema(

  {
    name: String,

    phone: String,

    location: String,

    message: String,

    time: String,

    createdAt: {
      type: Date,

      default: Date.now,
    },
  }

);

export default mongoose.model(
  "Booking",
  bookingSchema
);