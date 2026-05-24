import axios from "axios";
import { useState } from "react";
import toast
from "react-hot-toast";

function BookingModal({
  open,
  setOpen,
}) {

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      location: "",
      message: "",
    });

  const handleBooking =
    async (e) => {

      e.preventDefault();

      try {

        await axios.post(
          "https://client-project-9ofp.onrender.com/api/bookings",

          {
            ...formData,

            time:
              new Date().toLocaleString(),
          }
        );

        toast.success(
  "Booking sent"
);

        setFormData({
          name: "",
          phone: "",
          location: "",
          message: "",
        });

        setOpen(false);

      } catch (error) {

        console.log(error);

      }
    };

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      px-5
      "
    >

      <div
        className="
        bg-zinc-900
        w-full
        max-w-lg
        rounded-3xl
        p-8
        border
        border-zinc-800
        "
      >

        <div
          className="
          flex
          justify-between
          items-center
          mb-6
          "
        >

          <h1
            className="
            text-white
            text-3xl
            font-bold
            "
          >
            Book Now
          </h1>

          <button
            onClick={() =>
              setOpen(false)
            }

            className="
            text-white
            text-2xl
            "
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleBooking}

          className="space-y-5"
        >

          <input
            type="text"

            placeholder="Your Name"

            value={formData.name}

            className="
            w-full
            bg-zinc-800
            text-white
            p-4
            rounded-xl
            outline-none
            "

            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="number"

            placeholder="Phone Number"

            value={formData.phone}

            className="
            w-full
            bg-zinc-800
            text-white
            p-4
            rounded-xl
            outline-none
            "

            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />

          <input
            type="text"

            placeholder="Location"

            value={formData.location}

            className="
            w-full
            bg-zinc-800
            text-white
            p-4
            rounded-xl
            outline-none
            "

            onChange={(e) =>
              setFormData({
                ...formData,
                location: e.target.value,
              })
            }
          />

          <textarea
            rows="4"

            placeholder="Message"

            value={formData.message}

            className="
            w-full
            bg-zinc-800
            text-white
            p-4
            rounded-xl
            outline-none
            "

            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />

          <button
            className="
            w-full
            bg-pink-600
            hover:bg-pink-700
            active:scale-95
            transition-all
            duration-300
            text-white
            py-4
            rounded-xl
            font-bold
            text-lg
            "
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
}

export default BookingModal;