import React from 'react'

export default function Footer() {
  return (
    <footer
  className="
  bg-zinc-950
  border-t
  border-zinc-800
  mt-20
  "
>

  <div
    className="
    max-w-7xl
    mx-auto
    px-5
    py-16
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    gap-12
    "
  >

    {/* ABOUT */}

    <div>

      <h1
        className="
        text-white
        text-3xl
        font-black
        "
      >
        Premium Companions
      </h1>

      <p
        className="
        text-zinc-400
        mt-5
        leading-8
        text-sm
        "
      >
        Discover premium companionship
        services with complete privacy,
        elegance and comfort. We focus
        on delivering a luxurious and
        memorable experience for every
        client with trusted and
        professional service.
      </p>

      <div className="flex gap-4 mt-6">

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-zinc-800
          flex
          items-center
          justify-center
          text-white
          hover:bg-pink-600
          duration-300
          cursor-pointer
          "
        >
          F
        </div>

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-zinc-800
          flex
          items-center
          justify-center
          text-white
          hover:bg-pink-600
          duration-300
          cursor-pointer
          "
        >
          I
        </div>

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-zinc-800
          flex
          items-center
          justify-center
          text-white
          hover:bg-pink-600
          duration-300
          cursor-pointer
          "
        >
          X
        </div>

      </div>

    </div>

    {/* QUICK LINKS */}

    <div>

      <h2
        className="
        text-white
        text-2xl
        font-bold
        mb-6
        "
      >
        Quick Links
      </h2>

      <div
        className="
        flex
        flex-col
        gap-4
        "
      >

        <a
          href="/"

          className="
          text-zinc-400
          hover:text-pink-500
          duration-300
          "
        >
          Home
        </a>

        <a
          href="/login"

          className="
          text-zinc-400
          hover:text-pink-500
          duration-300
          "
        >
          Admin Login
        </a>

        <a
          href="/"

          className="
          text-zinc-400
          hover:text-pink-500
          duration-300
          "
        >
          VIP Services
        </a>

        <a
          href="/"

          className="
          text-zinc-400
          hover:text-pink-500
          duration-300
          "
        >
          Luxury Experience
        </a>

      </div>

    </div>

    {/* SERVICES */}

    <div>

      <h2
        className="
        text-white
        text-2xl
        font-bold
        mb-6
        "
      >
        Services
      </h2>

      <div
        className="
        flex
        flex-col
        gap-4
        text-zinc-400
        "
      >

        <p>
          ✓ Private Meetings
        </p>

        <p>
          ✓ Premium Companion
        </p>

        <p>
          ✓ VIP Booking
        </p>

        <p>
          ✓ Hotel Visit
        </p>

        <p>
          ✓ Night Booking
        </p>

        <p>
          ✓ 24/7 Support
        </p>

      </div>

    </div>

    {/* CONTACT */}

    <div>

      <h2
        className="
        text-white
        text-2xl
        font-bold
        mb-6
        "
      >
        Contact Info
      </h2>

      <div
        className="
        space-y-5
        text-zinc-400
        text-sm
        leading-7
        "
      >

        <p>
          📍 Mumbai, Maharashtra,
          India
        </p>

        <p>
          📞 +91 9999999999
        </p>

        <p>
          ✉ support@gmail.com
        </p>

        <p>
          ⏰ Available 24 Hours
        </p>

      </div>

    </div>

  </div>

  {/* BOTTOM */}

  <div
    className="
    border-t
    border-zinc-800
    py-6
    px-5
    "
  >

    <div
      className="
      max-w-7xl
      mx-auto
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-4
      "
    >

      <p
        className="
        text-zinc-500
        text-sm
        text-center
        "
      >
        © 2026 Premium Companions.
        All Rights Reserved.
      </p>

      <div
        className="
        flex
        gap-5
        text-sm
        text-zinc-500
        "
      >

        <a
          href="/"

          className="
          hover:text-pink-500
          duration-300
          "
        >
          Privacy Policy
        </a>

        <a
          href="/"

          className="
          hover:text-pink-500
          duration-300
          "
        >
          Terms & Conditions
        </a>

      </div>

    </div>

  </div>

</footer>
  )
}
