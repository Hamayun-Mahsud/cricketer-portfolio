"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-smooth">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-slate-900">
              Cricketer Portfolio
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 hover:text-slate-500 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-10 uppercase font-semibold">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, "#home")}
                  className="text-slate-900 hover:text-slate-500 uppercase"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  onClick={(e) => handleScroll(e, "#achievements")}
                  className="text-slate-900 hover:text-slate-500"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#matches"
                  onClick={(e) => handleScroll(e, "#matches")}
                  className="text-slate-900 hover:text-slate-500"
                >
                  Matches
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  onClick={(e) => handleScroll(e, "#videos")}
                  className="text-slate-900 hover:text-slate-500"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, "#about")}
                  className="text-slate-900 hover:text-slate-500"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="text-slate-900 hover:text-slate-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <ul className="space-y-4 text-center uppercase font-semibold">
                <li>
                  <a
                    href="#home"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-900 hover:text-slate-500 block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#achievements"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-900 hover:text-slate-500 block"
                  >
                    Achievements
                  </a>
                </li>
                <li>
                  <a
                    href="#matches"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-900 hover:text-slate-500 block"
                  >
                    Matches
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-900 hover:text-slate-500 block"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-900 hover:text-slate-500 block"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-900 hover:text-slate-500 block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-gray-100"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Naseer Ullah Mahsud
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-200">
            Professional Cricketer
          </p>
          <a
            href="#achievements"
            className="mt-4 inline-block px-6 py-3 bg-slate-500 text-white hover:bg-slate-800 rounded-lg"
          >
            See My Achievements
          </a>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">My Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 1</h3>
            <p className="text-gray-600">Details about your achievement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 2</h3>
            <p className="text-gray-600">Details about your achievement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 3</h3>
            <p className="text-gray-600">Details about your achievement.</p>
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="py-16 bg-gray-100 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Matches Played</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Match 1 - Date</h3>
            <p className="text-gray-600">
              Details about your match performance.
            </p>
          </div>
          {/* Additional Match Cards */}
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 bg-gray-50 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <video className="w-full" controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600">
          Your cricket journey, goals, and passion for the sport.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Contact Me
        </h2>
        <form className="max-w-lg mx-auto mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-slate-500 text-white rounded-lg hover:bg-slate-800"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Naseer Ullah Mahsud</p>
      </footer>
    </div>
  );
}
