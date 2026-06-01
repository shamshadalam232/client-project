import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Admin() {

  const [bookings, setBookings] = useState([]);

  const [profiles, setProfiles] = useState([]);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    caption: "",
  });

  const [image, setImage] = useState(null);

  // GET ALL PROFILES

  const getProfiles = async () => {

    try {

      const res = await axios.get(
        "https://client-project-1d2g.vercel.app/api/profiles"
      );

      setProfiles(res.data);

    } catch (error) {
      console.log(error)
      toast.error(
  "Something went wrong"
);

    }
  };

  useEffect(() => {
    getProfiles();
  }, []);

  // CREATE & UPDATE PROFILE

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const data = new FormData();

      data.append("name", formData.name);

      data.append("age", formData.age);

      data.append(
        "caption",
        formData.caption
      );

      if (image) {
        data.append("image", image);
      }

      // UPDATE

      if (editId) {

        await axios.put(
          `https://client-project-1d2g.vercel.app/api/profiles/${editId}`,

          data,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

       toast.success(
  "Edited successful"
);

      }

      // CREATE

      else {

        await axios.post(
          "https://client-project-1d2g.vercel.app/api/profiles",

          data,

          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        toast.success(
  "Profile Added"
);

      }

      // REFRESH

      getProfiles();

      // RESET

      setEditId(null);

      setFormData({
        name: "",
        age: "",
        caption: "",
      });

      setImage(null);

    } catch (error) {

      console.log(error);

    }
  };

  // DELETE PROFILE

  const handleDelete = async (id) => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.delete(
        `https://client-project-1d2g.vercel.app/api/profiles/${id}`,

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

toast.success(
  "Profile Deleted"
);

      getProfiles();

    } catch (error) {

      console.log(error);

    }
  };

  // EDIT PROFILE

  const handleEdit = (item) => {

    setEditId(item._id);

    setFormData({
      name: item.name,
      age: item.age,
      caption: item.caption,
    });

  };
   
  // get booking
  const getBookings = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const res = await axios.get(
      "https://client-project-1d2g.vercel.app/api/bookings",

      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    setBookings(res.data);

  } catch (error) {

    console.log(error);

  }
};

useEffect(() => {

  getProfiles();

  getBookings();

}, []);

  return (
    <div
      className="
      min-h-screen
      bg-black
      px-5
      py-10
      "
    >

      {/* FORM */}

      <form
        onSubmit={handleSubmit}

        className="
        bg-zinc-900
        p-8
        rounded-3xl
        w-full
        max-w-xl
        border
        border-zinc-800
        mx-auto
        "
      >

        <h1
          className="
          text-white
          text-3xl
          font-bold
          mb-8
          "
        >
          Admin Panel
        </h1>

        <div className="space-y-5">

          <input
            type="text"

            placeholder="Name"

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

            placeholder="Age"

            value={formData.age}

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
                age: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Caption"

            rows="4"

            value={formData.caption}

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
                caption: e.target.value,
              })
            }
          />

          <input
            key={image ? image.name : ""}

            type="file"

            className="
            w-full
            text-white
            "

            onChange={(e) =>
              setImage(e.target.files[0])
            }
          />

          <button
            className="
            w-full
            bg-pink-600
            hover:bg-pink-700
            text-white
            py-4
            rounded-xl
            text-lg
            font-bold
            "
          >
            {editId
              ? "Update Profile"
              : "Upload Profile"}
          </button>

        </div>

      </form>

      {/* PROFILES */}

      <div
        className="
        mt-10
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        "
      >

        {profiles.map((item) => (

          <div
            key={item._id}

            className="
            bg-zinc-900
            p-4
            rounded-2xl
            border
            border-zinc-800
            "
          >

            <img
              src={item.image}

              alt=""

              className="
              w-full
              h-72
              object-cover
              rounded-xl
              "
            />

            <h2
              className="
              text-white
              text-2xl
              font-bold
              mt-4
              "
            >
              {item.name}
            </h2>

            <p className="text-pink-500 mt-1">
              Age : {item.age}
            </p>

            <p className="text-zinc-400 mt-3">
              {item.caption}
            </p>

            <div className="flex gap-3 mt-5">

              <button
                onClick={() =>
                  handleEdit(item)
                }

                className="
                flex-1
                bg-yellow-500
                text-white
                py-3
                rounded-xl
                active:scale-95
                "
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDelete(item._id)
                }

                className="
                flex-1
                bg-red-500
                text-white
                py-3
                rounded-xl
                "
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-20">

  <h1
    className="
    text-white
    text-4xl
    font-bold
    mb-8
    "
  >
    BOOKINGS
  </h1>

  <div className="space-y-5">

    {bookings.map((item) => (

      <div
        key={item._id}

        className="
        bg-zinc-900
        border
        border-zinc-800
        p-6
        rounded-2xl
        "
      >

        <div
          className="
          flex
          flex-col
          md:flex-row
          md:justify-between
          gap-3
          "
        >

          <div>

            <h2
              className="
              text-white
              text-2xl
              font-bold
              "
            >
              {item.name}
            </h2>

            <p className="text-zinc-400 mt-2">
              📞 {item.phone}
            </p>

            <p className="text-zinc-400 mt-2">
              📍 {item.location}
            </p>

          </div>

          <div>

            <p className="text-pink-500">
              {item.time}
            </p>

          </div>

        </div>

        <p
          className="
          text-zinc-300
          mt-5
          leading-7
          "
        >
          {item.message}
        </p>

      </div>

    ))}

  </div>

</div>

    </div>
  );
}

export default Admin;