import React, { useEffect, useState } from 'react';
import SectionPopup from "./components/SectionPopup";

function Tours() {

  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    localStorage.setItem('toursTotal', JSON.stringify(0));
    localStorage.setItem('toursQuantity', JSON.stringify(0));
  }, []);

  const tourDates = [
    { id: 1, date: "April 9, 2025", time: "7:00 PM", location: "Houston, TX", address: "713 Music Hall", image: 'tour1.png' },
    { id: 2, date: "April 30, 2025", time: "8:00 PM", location: "Sacramento, CA", address: "Ace Of Spades", image: 'tour2.png' },
    { id: 3, date: "May 19, 2025", time: "6:00 PM", location: "Chicago, IL", address: "Wintrust Arena", image: 'tour3.png' },
    { id: 4, date: "June 8, 2025", time: "7:30 PM", location: "Orlando, FL", address: "Kia Center", image: 'tour4.png' },
    { id: 5, date: "June 22, 2025", time: "8:00 PM", location: "Phoenix, AZ", address: "The Van Buren", image:'tour5.png' },
    { id: 6, date: "July 15, 2025", time: "8:30 PM", location: "New York, NY", address: "Madison Square Garden", image: 'tour6.png' }, 
  ];

  return (
    <div
    
    className="min-h-screen bg-pageBlack" 
    style={{
      backgroundImage: "url('/STAGEFRIGHTBAND/tourhero2.png')",  
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
    }}
  
    >




      {/* Header */}
      <header className="text-center text-white py-8">
  <h1 
    className="font-metal text-7xl font-bold mt-[30px] "
    style={{ textShadow: "0 0 10px #ba530d, 0 0 30px #ff6701, 0 0 40px #ff6701" }}
  >
    Stage Fright Tours
  </h1>
  <p 
    className="font-quicksand font-semibold text-xl mt-4"
  >
    Explore our tour dates and book your tickets now!
  </p>
</header>


      {/* Tour List */}
      <div className=" py-10">
        <h2 className="font-fancy text-5xl font-semibold text-center mb-6 text-white"
        style={{ textShadow: "0 0 10px #ba530d, 0 0 30px #ff6701, 0 0 40px #ff6701" }}>Upcoming Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tourDates.map((tour) => (
            <div
              key={tour.id}
              className="bg-navRed shadow-lg rounded-lg overflow-hidden hover:bg-navRed1 cursor-pointer"
              onClick={() => setSelectedTour(tour)}
            >
              <img src={tour.image} alt={tour.location} className="w-full h-40 object-cover" />
              <div className="p-6 text-center">
                <span className="font-fancy text-white text-2xl font-bold">{tour.location}</span>
                <span className="font-fancy block text-white text-lg font-bold">{tour.address}</span>
                <div className="mt-4">
                  <span className="font-quicksand block text-white text-lg">{tour.date}</span>
                  <span className="font-quicksand block text-white text-lg">{tour.time}</span>
                </div>
              </div>
              <div className="font-quicksand bg-white text-navRed text-center py-2 font-semibold">
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
