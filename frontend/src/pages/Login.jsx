import axios from "axios";
import { useState } from "react";

import toast from "react-hot-toast";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      toast.success("Login Success");

      window.location.href = "/admin";

    } catch (error) {

      toast.error(
        error.response.data.message
      );

    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-black
      flex
      justify-center
      items-center
      px-5
      "
    >

      <form
        onSubmit={handleLogin}
        className="
        bg-zinc-900
        border
        border-zinc-800
        p-8
        rounded-3xl
        w-full
        max-w-md
        shadow-2xl
        "
      >

        <h1
          className="
          text-white
          text-4xl
          font-black
          mb-8
          text-center
          "
        >
          Admin Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            className="
            w-full
            bg-zinc-800
            text-white
            p-4
            rounded-xl
            outline-none
            border
            border-zinc-700
            focus:border-pink-500
            "
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="
            w-full
            bg-zinc-800
            text-white
            p-4
            rounded-xl
            outline-none
            border
            border-zinc-700
            focus:border-pink-500
            "
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="
            w-full
            bg-pink-600
            hover:bg-pink-700
            duration-300
            text-white
            py-4
            rounded-xl
            font-bold
            text-lg
            "
          >
            Login
          </button>

        </div>

      </form>

    </div>
  );
}

export default Login;