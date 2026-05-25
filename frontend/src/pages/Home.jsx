import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../components/Card";

function Home() {
  const [profiles, setProfiles] = useState([]);

  const getProfiles = async () => {
    try {
      const res = await axios.get(
        "https://client-project-9ofp.onrender.com/api/profiles"
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
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200')",
        }}
      >

        <div className="text-center">

          <h1
            className="
            text-white
            text-4xl
            md:text-7xl
            font-black
            "
          >
            Mumbai’s Most Exclusive Companions
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
            Private. Elegant. Premium Experience.
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
            <Card key={item._id} item={item} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Home;
