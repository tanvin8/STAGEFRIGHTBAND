
import React, { useEffect, useState } from "react";

let sectionPicked = null
  let toursTotal = 0
  let toursQuantity = 0
  let isTour = 'true'
  localStorage.setItem('toursTotal', JSON.stringify(0))
  localStorage.setItem('toursQuantity', JSON.stringify(0))
const SectionPopup = ({ tour, onClose}) => {
  const [selectedSections, setSelectedSections] = useState([]);
  const [seatCount, setSeatCount] = useState({});
  

  useEffect(() => {
    sectionPicked = null
    toursTotal = 0
    toursQuantity = 0
    localStorage.setItem('toursTotal', JSON.stringify(0))
    localStorage.setItem('toursQuantity', JSON.stringify(0))
      }, []); 

  const locationData = {
    "Houston, TX": {
      VIP: { seats: 20, price: 250 },
      "Right Deck": { seats: 50, price: 150 },
      "Left Deck": { seats: 100, price: 75 },
      "General Admission": { seats: 0, price: 0 },
      "Physically Handicapped": { seats: 50, price: 70 },
    },
    "Sacramento, CA": {
      VIP: { seats: 10, price: 300 },
      "Right Deck": { seats: 0, price: 0 },
      "Left Deck": { seats: 50, price: 100 },
      "General Admission": { seats: 100, price: 50 },
      "Physically Handicapped": { seats: 100, price: 60 },
    },
    "Chicago, IL": {
      VIP: { seats: 5, price: 500 },
      "Right Deck": { seats: 25, price: 200 },
      "Left Deck": { seats: 75, price: 120 },
      "General Admission": { seats: 150, price: 60 },
      "Physically Handicapped": { seats: 80, price: 55 },
    },
    "Orlando, FL": {
      VIP: { seats: 0, price: 450 },
      "Right Deck": { seats: 30, price: 200 },
      "Left Deck": { seats: 50, price: 100 },
      "General Admission": { seats: 80, price: 50 },
      "Physically Handicapped": { seats: 120, price: 50 },
    },
    "Phoenix, AZ": {
      VIP: { seats: 15, price: 400 },
      "Right Deck": { seats: 10, price: 180 },
      "Left Deck": { seats: 0, price: 0 },
      "General Admission": { seats: 200, price: 40 },
      "Physically Handicapped": { seats: 90, price: 50 },
    },
    "New York, NY": {
      VIP: { seats: 23, price: 380 },
      "Right Deck": { seats: 89, price: 180 },
      "Left Deck": { seats: 23, price: 90 },
      "General Admission": { seats: 0, price: 0 },
      "Physically Handicapped": { seats: 90, price: 50 },
    },
  };

  const sections = [
    { id: "VIP", label: "VIP", x: "29.3%", y: "50%", width: "260px", height: "194px" },
    { id: "Right Deck", label: "Right Deck", x: "71.1%", y: "38.9%", width: "170px", height: "84px" },
    { id: "Left Deck", label: "Left Deck", x: "71.1%", y: "61%", width: "170px", height: "84px" },
    { id: "General Admission", label: "General Admission", x: "92.7%", y: "50.1%", width: "87px", height: "196px" },
    { id: "Physically Handicapped", label: "Handicapped", x: "50%", y: "50%", width: "30px", height: "193px" },
  ];



  const handleSectionClick = (section) => {
    const locationSeats = locationData[tour.location][section.id];
    sectionPicked = section.id
        isTour = true
        [tour.seats] > 0
        toursQuantity += 1
        toursTotal += locationData[tour.location][section.id].price
        localStorage.setItem('toursTotal', JSON.stringify(toursTotal))
        localStorage.setItem('toursQuantity', JSON.stringify(toursQuantity))
    if (locationSeats.seats === 0) {
      alert("This section is sold out!");
      toursQuantity -= 1
        toursTotal -= locationData[tour.location][section.id].price
        localStorage.setItem('toursTotal', JSON.stringify(toursTotal))
        localStorage.setItem('toursQuantity', JSON.stringify(toursQuantity))
      return;
    }

    if (!selectedSections.some((s) => s.id === section.id)) {
      setSelectedSections([...selectedSections, section]);
      setSeatCount((prev) => ({ ...prev, [section.id]: 1 }));
    }
  };

  const handleSeatChange = (sectionId, value) => {
    const maxSeats = locationData[tour.location][sectionId].seats;
    const newCount = Math.max(1, Math.min(value, maxSeats));
    const pricePerTicket = locationData[tour.location][sectionId].price;
    const prevCount = seatCount[sectionId] || 1;

    // Calculate the change in quantity and total
    const quantityDiff = newCount - prevCount;
    const priceDiff = quantityDiff * pricePerTicket;

    // Update global total and quantity
    toursQuantity += quantityDiff;
    toursTotal += priceDiff;

    // Update localStorage
    localStorage.setItem('toursTotal', JSON.stringify(toursTotal));
    localStorage.setItem('toursQuantity', JSON.stringify(toursQuantity));

    // Update state
    setSeatCount((prev) => ({
      ...prev,
      [sectionId]: newCount,
    }));
  };

  const handleRemoveFromOrder = (sectionId) => {
    const sectionData = locationData[tour.location][sectionId];
    const seatsToRemove = seatCount[sectionId] || 1;

    // Decrease total count and total price
    toursQuantity = Math.max(0, toursQuantity - seatsToRemove);
    toursTotal = Math.max(0, toursTotal - seatsToRemove * sectionData.price);

    // Update localStorage
    localStorage.setItem('toursTotal', JSON.stringify(toursTotal));
    localStorage.setItem('toursQuantity', JSON.stringify(toursQuantity));

    // Remove the section from selected sections
    setSelectedSections((prev) => prev.filter((section) => section.id !== sectionId));

    // Remove from seat count state
    setSeatCount((prev) => {
      const updated = { ...prev };
      delete updated[sectionId];
      return updated;
    });
  };
  

  const handleAddToCart = () => {
    console.log(
      "Added to cart:",
      selectedSections.map((section) => ({
        section: section.label,
        seats: seatCount[section.id],
        price: locationData[tour.location][section.id].price * seatCount[section.id],

      }))
    );

    let oldCartItems = localStorage.getItem('cart');
        let flag = 0;

// Parse cart data if it exists, otherwise initialize as an empty array
oldCartItems = oldCartItems ? JSON.parse(oldCartItems) : [];


// Ensure oldCartItems is an array
if (!Array.isArray(oldCartItems)) {
  oldCartItems = []; // Fallback to an empty array
}

// Check for existing product and update quantity
const updatedCartItems = oldCartItems.map((oldCartitem) => {
  if (oldCartitem.name === tour.address) {
    flag = 1; // Mark product as found
    return { ...oldCartitem, seatCount: oldCartitem.seatCount + seatCount }; // Update quantity
  }
  return oldCartitem; // Leave other items unchanged
});

// If the product was not found, add it to the cart
if (flag == 0) {

    let toursTotal = localStorage.getItem('toursTotal');
    let toursQuantity = localStorage.getItem('toursQuantity');
    
  oldCartItems.push({
    quantity: toursQuantity,
    name: tour.location,
    price: toursTotal,
    isTour: true
  });
  localStorage.setItem('toursTotal', JSON.stringify(0));
  localStorage.setItem('toursQuantity', JSON.stringify(0));
  localStorage.setItem('cart', JSON.stringify(oldCartItems)); // Save the updated cart
} else {
  localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Save the updated cart
  localStorage.setItem('toursTotal', JSON.stringify(0));
  localStorage.setItem('toursQuantity', JSON.stringify(0));
}

// Log the cart to verify
console.log(JSON.parse(localStorage.getItem('cart')));


// Log the current cart
console.log(JSON.parse(localStorage.getItem('cart')));
sectionPicked = null
  toursTotal = 0
  toursQuantity = 0
  isTour = true
    onClose()
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-neutral-600 text-white p-6 rounded-lg w-[1200px] h-[650px] mt-[50px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black font-bold p-3 z-10 text-xl"
        >
          ❌
        </button>
        <div className= "flex flex-col">
        <h2 className="font-quicksand text-2xl font-bold text-center mb-1">
          Seating Map for {tour.location}
        </h2 >
        <h2 className="font-quicksand text-2xl font-bold text-center mb-4">
         {tour.address}
        </h2>
        </div>

        <div className="relative w-[600px] h-[500px] mt-[-40px]">
          <img
            src="stadium.svg"
            alt="Stadium Map"
            className="w-full h-full object-cover rounded-lg"
          />

          {sections.map((section) => {
            const sectionData = locationData[tour.location][section.id];
            return (
              <div
                key={section.id}
                className={`absolute cursor-pointer flex items-center justify-center text-center text-white font-semibold ${
                  sectionData.seats === 0 ? "bg-red-500" : "bg-green-500"
                } bg-opacity-100 hover:bg-opacity-100`}
                style={{
                  left: section.x,
                  top: section.y,
                  transform: "translate(-50%, -50%)",
                  width: section.width,
                  height: section.height,
                  backgroundColor: section.id === "Physically Handicapped" ? "blue" : "", 
                }}
                onClick={() => handleSectionClick(section)}
                title={`${section.label} - $${sectionData.price}`}
              >
                <span
                  style={
                    section.id === "Physically Handicapped"
                      ? {
                          transform: "rotate(-90deg)", 
                          color: "white", 
                        }
                      : {}
                  }
                >
                  {sectionData.seats > 0 ? section.label : "Sold Out"}
                </span>
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 right-[10px] w-[400px] h-full bg-neutral-600 text-white p-4 rounded-lg">
          <h3 className="font-quicksand text-xl font-bold mb-[0px] mt-[100px]">Order Summary</h3>
          <div className="h-[500px] overflow-y-auto">
            {selectedSections.length === 0 ? (
              <p className = "font-quicksand mb-2 mt-3 text-gray-200">Please select sections to add to the cart.</p>
            ) : (
              selectedSections.map((section) => {
                const sectionData = locationData[tour.location][section.id];
                return (
                  <div key={section.id} className="font-quicksand mb-4 mt-2 flex justify-between items-start">
                    <div>
                      <h4 className = "font-semibold">{section.label} Section</h4>
                      <p>Price per Ticket: ${sectionData.price}</p>
                      <p>Seats Available: {sectionData.seats}</p>
                      <div className=" flex items-center space-x-2">
                        <label>Seats:</label>
                        <input
                          type="number"
                          value={seatCount[section.id] || 1}
                          min="1"
                          max={sectionData.seats}
                          onChange={(e) =>
                            handleSeatChange(section.id, parseInt(e.target.value))
                          }
                          className="text-black font-bold bg-gray-200 w-16 text-center border-gray-200 border-white rounded"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromOrder(section.id)}
                      className="text-gray-500 font-bold text-xs"
                    >
                      ❌
                    </button>
                  </div>
                  
                );
              })
            )}
            <h1 className = "font-quicksand" >Total Tickets: {localStorage.getItem('toursQuantity')}</h1>
            <h1 className = "font-quicksand">Total: ${localStorage.getItem('toursTotal')}</h1>
            {selectedSections.length > 0 && (
              
              <button
                onClick={handleAddToCart}
                className="font-quicksand font-bold w-[350px] mt-4 py-2 bg-gray-800 text-white rounded-lg"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPopup;
