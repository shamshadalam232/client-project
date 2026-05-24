import React, { useState } from "react";

import BookingModal
from "./BookingModal";

export default function Card({
  item,
}) {

  const [open, setOpen] =
    useState(false);

  return (
    <>

      <div
        className="
        bg-zinc-900
        rounded-3xl
        overflow-hidden
        border
        border-zinc-800
        hover:scale-105
        duration-300
        "
      >

        <img
          src={item.image}

          alt=""

          className="
          w-full
          h-[350px]
          object-cover
          "
        />

        <div className="p-5">

          <div
            className="
            flex
            justify-between
            items-center
            "
          >

            <h2
              className="
              text-white
              text-2xl
              font-bold
              "
            >
              {item.name}
            </h2>

            <span
              className="
              text-pink-500
              font-bold
              "
            >
              {item.age}
            </span>

          </div>

          <p
            className="
            text-zinc-400
            mt-3
            text-sm
            leading-7
            "
          >
            {item.caption}
          </p>

          <div
            className="
            flex
            gap-3
            mt-5
            "
          >

            <button
              onClick={() =>
                setOpen(true)
              }

              className="
              flex-1
              bg-pink-600
              hover:bg-pink-700
              active:scale-95
              transition-all
              duration-300
              py-3
              rounded-xl
              text-white
              font-semibold
              "
            >
              Book Now
            </button>

            <a
              href="https://wa.me/919999999999"

              target="_blank"

              className="
              flex-1
              bg-green-600
              hover:bg-green-700
              active:scale-95
              transition-all
              duration-300
              py-3
              rounded-xl
              text-white
              text-center
              font-semibold
              "
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>

      <BookingModal
        open={open}
        setOpen={setOpen}
      />

    </>
  );
}