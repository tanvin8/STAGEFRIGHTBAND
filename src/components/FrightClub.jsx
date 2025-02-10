import React, { useState } from "react";
import { FaCameraRetro, FaVideo, FaMusic, FaBookOpen, FaTicketAlt, FaTshirt } from "react-icons/fa";

const FanClubPage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      setIsSubscribed(true);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-[url('/fanclub.png')] bg-cover bg-center h-[70vh] flex items-center justify-center">
      <div className="text-center drop-shadow-2xl px-8 py-12 rounded-lg">
          <h1 className="font-metal text-7xl font-bold uppercase mb-4 tracking-wider text-white" 
          style={{ textShadow: "0 0 5px #660000, 0 0 10px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000" }}>The Fright Club
          </h1>
          <p className="font-quicksand text-xl font-medium text-white" 
          style={{ textShadow: "0 0 10px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000" }}>
            Welcome to the ultimate experience for the true fans. Dive deeper into the music, the band, and the legacy.
          </p>
        </div>
      </div>

      {/* Exclusive Content */}
      <section className="font-quicksand bg-black py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className=" font-fancy text-3xl font-bold mb-8 uppercase tracking-wider" style={{ textShadow: "0 0 10px #7beaf0, 0 0 30px #7beaf0, 0 0 40px #7beaf0" }}>
            Exclusive Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Unseen Photos */}
            <div className="bg-navBlue p-6 rounded-lg flex flex-col items-center">
              <FaCameraRetro className="text-4xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Unseen Photos
              </h3>
              <p className="text-center">Unreleased and rarely seen photos from personal collections.</p>
            </div>
            {/* Unearthed Video */}
            <div className="bg-navBlue p-6 rounded-lg flex flex-col items-center">
              <FaVideo className="text-4xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Unearthed Video
              </h3>
              <p className="text-center">Rare footage, exclusive interviews, and behind-the-scenes content.</p>
            </div>
            {/* Unheard Audio */}
            <div className="bg-navBlue p-6 rounded-lg flex flex-col items-center">
              <FaMusic className="text-4xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Unheard Audio
              </h3>
              <p className="text-center">Clips from the studio, interviews, childhoods, and more.</p>
            </div>
            {/* Untold Stories */}
            <div className="bg-navBlue p-6 rounded-lg flex flex-col items-center">
              <FaBookOpen className="text-4xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Untold Stories
              </h3>
              <p className="text-center">From our perspective and those who were with us from the start.</p>
            </div>
            {/* Personal Artifacts */}
            <div className="bg-navBlue p-6 rounded-lg flex flex-col items-center">
              <FaTicketAlt className="text-4xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Personal Artifacts
              </h3>
              <p className="text-center">Old music, letters, and ideas scribbled on old journals, and beyond.</p>
            </div>
            {/* Exclusive Merch */}
            <div className="bg-navBlue p-6 rounded-lg flex flex-col items-center">
              <FaTshirt className="text-4xl text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Exclusive Merch
              </h3>
              <p className="text-center">Limited edition accessories, collabs, and recreated merch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="font-quicksand bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-fancy text-3xl font-bold mb-6 uppercase tracking-wider"
          style={{ textShadow: "0 0 10px #7beaf0, 0 0 30px #069494, 0 0 40px #069494" }}> Join the Mailing List
          </h2>
          {!isSubscribed ? (
            <>
              <p className="text-lg mb-6">
                Get exclusive updates about new tours, album releases, and more. Be the first to know!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 w-full sm:w-auto text-black rounded-lg"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-pageTeal hover:bg-teal-800 text-white font-bold px-6 py-3 rounded-lg uppercase tracking-wider"
                >
                  Subscribe Now
                </button>
              </div>
            </>
          ) : (
            <p className="text-lg font-semibold">
              Thank you for subscribing! You’re officially part of the fan club.
            </p>
          )}
        </div>
      </section>

    </div>
  );
};

export default FanClubPage;
