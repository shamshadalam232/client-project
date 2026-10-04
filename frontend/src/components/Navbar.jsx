import React, { useState } from "react";
import { Menu, X, Home, Sparkles, Users, Phone, ShieldCheck } from "lucide-react";
import image from "../assets/image.png";


export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
    
      {/* Main Navbar */}

      <nav className="max-w-7xl mx-auto h-[72px] px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center shrink-0">
          <img
            src={image}
            alt="Premium Massage Services"
            className="w-36 sm:w-44 md:w-52 h-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-7 lg:gap-9">

          <a
            href="#home"
            className="text-white/90 hover:text-pink-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-white/90 hover:text-pink-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="#profiles"
            className="text-white/90 hover:text-pink-400 transition duration-300"
          >
            Profiles
          </a>

          <a
            href="#about"
            className="text-white/90 hover:text-pink-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-white/90 hover:text-pink-400 transition duration-300"
          >
            Contact
          </a>

          {/* Admin Button */}
         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            md:hidden
            w-11 h-11
            flex items-center justify-center
            rounded-full
            border border-white/15
            bg-white/5
            text-white
            hover:bg-pink-600
            hover:border-pink-500
            transition-all duration-300
          "
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="
          border-t border-white/10
          bg-[#0b0b0b]
          px-5 py-5
          space-y-2
        ">

          {/* Home */}
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-white
              hover:bg-white/5
              hover:text-pink-400
              transition
            "
          >
            <Home size={19} />
            Home
          </a>

          {/* Services */}
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-white
              hover:bg-white/5
              hover:text-pink-400
              transition
            "
          >
            <Sparkles size={19} />
            Services
          </a>

          {/* Profiles */}
          <a
            href="#profiles"
            onClick={() => setIsMenuOpen(false)}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-white
              hover:bg-white/5
              hover:text-pink-400
              transition
            "
          >
            <Users size={19} />
            Profiles
          </a>

          {/* About */}
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-white
              hover:bg-white/5
              hover:text-pink-400
              transition
            "
          >
            <ShieldCheck size={19} />
            About
          </a>

          {/* Contact */}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              text-white
              hover:bg-white/5
              hover:text-pink-400
              transition
            "
          >
            <Phone size={19} />
            Contact
          </a>

        </div>
      </div>

      {/* Powered By */}
     

    </header>
  );
}
