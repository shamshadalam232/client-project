import axios from "axios";
import { useEffect, useState } from "react";

import FastMarquee from "react-fast-marquee";

import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {

  const [profiles, setProfiles] = useState([]);

  const getProfiles = async () => {

    try {

      const res = await axios.get(
        "https://client-project-1d2g.vercel.app/api/profiles"
      );

      setProfiles(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    getProfiles();

  }, []);

  return (

    <div
      className="
      min-h-screen
      bg-black
      "
    >

      {/* HERO */}

      <div
        className="
        h-[70vh]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        px-5
        relative
        overflow-hidden
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200')",
        }}
      >

        {/* TOP MARQUEE */}

       <div
  className="
  absolute
  top-0
  left-0
  w-full
  overflow-hidden
  bg-black/60
  py-3
  z-20
  "
>

  <div
    className="
    whitespace-nowrap
    text-white
    font-semibold
    tracking-widest
    animate-marquee
    "
  >

     Professional Massage •
  Relaxation Therapy •
  Stress Relief •
  Mumbai Service •
  Home Visit Available •
  Premium Wellness •

  </div>

</div>

        {/* OVERLAY */}

        <div
          className="
          absolute
          inset-0
          bg-black/40
          "
        ></div>

        {/* CONTENT */}

        <div
          className="
          text-center
          relative
          z-10
          "
        >

          <h1
            className="
            text-white
            text-4xl
            md:text-7xl
            font-black
            "
          >
            Mumbai’s Premium
  Massage Services
          </h1>

          <p
            className="
            text-zinc-300
            mt-5
            max-w-xl
            mx-auto
            text-sm
            md:text-lg
            "
          >
            Professional Massage.
  Relaxing Experience.
  Comfortable Environment.
          </p>

        </div>

      </div>

      {/* CARDS */}

      <div className="px-5 md:px-10 py-16">

        <h2
          className="
          text-white
          text-3xl
          md:text-5xl
          font-bold
          mb-10
          "
        >
          Exclusive Profiles
        </h2>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
          "
        >

          {profiles.map((item) => (

            <Card
              key={item._id}
              item={item}
            />

          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;