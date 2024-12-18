import React, { useEffect, useState } from 'react';
import SectionPopup from "./components/SectionPopup";

function Tours() {

  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    localStorage.setItem('toursTotal', JSON.stringify(0));
    localStorage.setItem('toursQuantity', JSON.stringify(0));
  }, []);

  const tourDates = [
    { id: 1, date: "Jan 9, 2025", time: "7:00 PM", location: "Houston, TX", address: "713 Music Hall", image: 'tour1.png' },
    { id: 2, date: "Jan 30, 2025", time: "8:00 PM", location: "Sacramento, CA", address: "Ace Of Spades", image: 'tour2.png' },
    { id: 3, date: "Feb 19, 2025", time: "6:00 PM", location: "Chicago, IL", address: "Wintrust Arena", image: 'tour3.png' },
    { id: 4, date: "March 8, 2025", time: "7:30 PM", location: "Orlando, FL", address: "Kia Center", image: 'tour4.png' },
    { id: 5, date: "April 22, 2025", time: "8:00 PM", location: "Phoenix, AZ", address: "The Van Buren", image:'tour5.png' },
    { id: 6, date: "May 15, 2025", time: "8:30 PM", location: "New York, NY", address: "Madison Square Garden", image: 'tour6.png' }, 
  ];

  return (
    <div className="bg-pageBlack min-h-screen">
      {/* Header */}
      <header className="text-center bg-pageBlack text-white py-8">
        <h1 className="text-5xl font-bold">Stage Fright Tours</h1>
        <p className="text-lg mt-4">Explore our tour dates and book your tickets now!</p>
      </header>

      {/* Tour List */}
      <div className="bg-pageBlack py-10">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Upcoming Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tourDates.map((tour) => (
            <div
              key={tour.id}
              className="bg-navRed shadow-lg rounded-lg overflow-hidden hover:bg-navRed1 cursor-pointer"
              onClick={() => setSelectedTour(tour)}
            >
              <img src={tour.image} alt={tour.location} className="w-full h-40 object-cover" />
              <div className="p-6 text-center">
                <span className="text-white text-xl font-bold">{tour.location}</span>
                <span className="block text-white text-lg font-bold">{tour.address}</span>
                <div className="mt-4">
                  <span className="block text-white text-lg">{tour.date}</span>
                  <span className="block text-white text-lg">{tour.time}</span>
                </div>
              </div>
              <div className="bg-white text-navRed text-center py-2 font-semibold">
                <button onClick={() => setSelectedTour(tour)}>View Tickets</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stadium Map Popup */}
      {selectedTour && (
        <SectionPopup
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      )}
    </div>
  );
}

export default Tours;
