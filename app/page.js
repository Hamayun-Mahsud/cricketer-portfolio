"use client";

export default function Home() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-smooth">
      {" "}
      {/* Enable smooth scrolling globally */}
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center space-x-20 py-4">
          <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "#home")}
                className="text-xl text-slate-900 hover:text-slate-500 font-semibold uppercase"
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href="#achievements"
                onClick={(e) => handleScroll(e, "#achievements")}
                className="text-xl text-slate-900 hover:text-slate-500 font-semibold uppercase"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#matches"
                onClick={(e) => handleScroll(e, "#matches")}
                className="text-xl text-slate-900 hover:text-slate-500 font-semibold uppercase"
              >
                Matches
              </a>
            </li>
            <li>
              <a
                href="#videos"
                onClick={(e) => handleScroll(e, "#videos")}
                className="text-xl text-slate-900 hover:text-slate-500 font-semibold uppercase"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-xl text-slate-900 hover:text-slate-500 font-semibold uppercase"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="text-xl text-slate-900 hover:text-slate-500 font-semibold uppercase"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-start bg-gray-100">
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
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-left">
            <h1 className="text-9xl font-bold text-white">
              Naseer Ullah Mahsud
            </h1>
            <p className="mt-2 text-5xl text-gray-200">
              Professional Cricketer
            </p>
            <a
              href="#achievements"
              className="mt-4 inline-block px-6 py-3 bg-slate-500 text-white hover:bg-slate-800 rounded-lg"
            >
              See My Achievements
            </a>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800">My Achievements</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 1</h3>
            <p className="text-gray-600">Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 2</h3>
            <p className="text-gray-600">Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 3</h3>
            <p className="text-gray-600">Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 3</h3>
            <p className="text-gray-600">Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 3</h3>
            <p className="text-gray-600">Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl text-gray-800">Achievement 3</h3>
            <p className="text-gray-600">Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
              Details about your achievement.
            </p>
          </div>
        </div>
      </section>
      {/* Matches Section */}
      <section id="matches" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Matches Played</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Match 1 - Date</h3>
            <p className="text-gray-600">
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Match 2 - Date</h3>
            <p className="text-gray-600">
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.

            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Match 3 - Date</h3>
            <p className="text-gray-600">
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Match 4 - Date</h3>
            <p className="text-gray-600">
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Match 5 - Date</h3>
            <p className="text-gray-600">
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800">Match 6 - Date</h3>
            <p className="text-gray-600">
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
              Details about your match performance.
            </p>
          </div>
        </div>
      </section>
      {/* Videos Section */}
      <section id="videos" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Videos</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <video className="w-full" controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <video className="w-full" controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <video className="w-full" controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section id="about" className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          About Me
        </h2>
        <p className="container mx-auto text-center text-gray-600 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
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
            className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg"
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
