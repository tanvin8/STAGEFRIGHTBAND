import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faSoundcloud, faItunes, faYoutube, faInstagram, faTiktok, faSnapchat, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const SocialMediaIcons = () => (
  <div className="flex bg-pageBlack mt-4">
    <div className="flex space-x-3 ">
      {[faSpotify, faSoundcloud, faItunes, faYoutube, faInstagram, faTiktok, faSnapchat, faXTwitter].map((icon, index) => (
        <button
          key={index}
          className="rounded-full transition-all"
        >
          <FontAwesomeIcon icon={icon} className="hover:text-gray-400 text-white text-lg" />
        </button>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    info: ""
  });

  // Booking
  const [bookingFormData, setBookingFormData] = useState({
    bookname: "",
    bookemail: "",
    date: "",
    location: "",
    starttime: "",
    endtime: "",
    addinfo: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    firstName: "",
    lastName: "",
    billingZip: "",
    cost: "0.00"
  });

  const [showModal, setShowModal] = useState(false);
  const [showBookingModal, setBookingShowModal] = useState(false);
  const [faqOpen, setFaqOpen] = useState(Array(10).fill(false));

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...bookingFormData, [name]: value };
    
    if (name === "starttime" || name === "endtime") {
        const start = updatedFormData.starttime;
        const end = updatedFormData.endtime;

        if (start && end) {
            const [startHour, startMinute] = start.split(":").map(Number);
            const [endHour, endMinute] = end.split(":").map(Number);

            const startTime = startHour + startMinute / 60;
            const endTime = endHour + endMinute / 60;
            const duration = Math.max(endTime - startTime, 0); 
            const calculatedCost = duration * 60; // $60 per hour

            setBookingFormData({
                ...updatedFormData,
                cost: calculatedCost.toFixed(2), 
            });
            return;
        }
    }

    setBookingFormData(updatedFormData); 
};

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject) {
      alert("Please fill in all required fields.");
      return;
    }
    setShowModal(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingFormData.bookname || !bookingFormData.bookemail || !bookingFormData.date || !bookingFormData.location || !bookingFormData.starttime || !bookingFormData.endtime || !bookingFormData.cardNumber || !bookingFormData.expiryDate|| !bookingFormData.cvv || !bookingFormData.firstName || !bookingFormData.lastName || !bookingFormData.billingZip ) {
      alert("Please fill in all required fields for the Booking Form");
      return;
    }
    setBookingShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      info: ""
    });
  };

  const resetBookingForm = () => {
    setBookingFormData({
      bookname: "",
      bookemail: "",
      date: "",
      location: "",
      starttime: "",
      endtime: "",
      addinfo: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      firstName: "",
      lastName: "",
      billingZip: "",
      cost: "0.00"
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    resetForm();
  };

  const handleBookingModalClose = () => {
    setBookingShowModal(false);
    resetBookingForm();
  };

  const toggleFaq = (index) => {
    setFaqOpen((prev) => {
      const newFaqOpen = [...prev];
      newFaqOpen[index] = !newFaqOpen[index];
      return newFaqOpen;
    });
  };

  return (
    <div className="font-quicksand bg-pageBlack text-white">
      <div className="flex flex-col lg:flex-row lg:justify-around bg-pageBlack text-white">
        {/* Contact Info */}
        <div className="lg:w-1/2 mt-[50px] mx-16">
          <h1 className="text-left text-4xl font-bold mb-4 font-fancy" style={{ textShadow: "0 0 10px #fff, 0 0 30px #ff0000, 0 0 40px #ff0000" }}>Contact Us</h1>
          <div className="text-left text-xl mb-6">
            <p className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-white" />
              info@stagefright.com
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-white" />
              738-372-4823
            </p>
            <SocialMediaIcons />
          </div>
          <hr className="border-t border-gray-400 mb-6" />

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-semibold mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-400 p-2 rounded-md text-black"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-400 p-2 rounded-md text-black"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-1">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full border border-gray-400 p-2 rounded-md text-black"
                required
              >
                <option value="" className="text-black font-semibold">
                  Select a subject
                </option>
                <option className="text-black">General Inquiry</option>
                <option className="text-black">Technical Support</option>
                <option className="text-black">Billing</option>
                <option className="text-black">Refunds</option>
                <option className="text-black">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-1">Additional Info</label>
              <textarea
                name="info"
                value={formData.info}
                onChange={handleInputChange}
                className="w-full border border-gray-400 p-2 rounded-md text-black"
                rows="5"
                placeholder="Provide additional details here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-navRed text-white font-semibold px-6 py-2 rounded-md hover:bg-navRed1 outline"
            >
              Submit
            </button>
          </form>
        </div>

        {/* FAQ  */}
        <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0 mx-16">
          <h2 className="font-fancy text-left text-4xl font-bold mb-4 mt-[50px]" style={{ textShadow: "0 0 10px #fff, 0 0 30px #ff0000, 0 0 40px #ff0000" }}>FAQs</h2>
          <div className="space-y-4">
            {[
              "Can I return or exchange merchandise?",
              "What if my merch arrives damaged or incorrect?",
              "Do you ship internationally?",
              "How long does shipping take?",
              "How can I track my order?",
              "Can I cancel my order?",
              "Do you offer refunds for tickets?",
              "What should I bring to your concerts?",

            ].map((question, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer font-semibold text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform ${
                      faqOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {faqOpen[index] && (
                  <p className="mt-2 text-white ml-[10px]">
                    {/* answers*/}
                    {[
                      "Returns and exchanges are allowed for unworn and unused items within 30 days of purchase.",
                      "Contact us within 7 days of delivery for a replacement or refund.",
                      "Yes, we offer international shipping!",
                      "Standard U.S. shipping takes 5-7 business days. International may take 2-4 weeks.",
                      "You’ll receive a tracking number via email once your order ships.",
                      "Orders can be canceled within 24 hours of purchase.",
                      "Yes, we offer refunds for tickets within 30 days of purchasing. Refunds will not be issued within 10 days of the concert",
                      "Bring a valid ID, your ticket (digital or printed), and any necessary items for your comfort (earplugs, cash for merch, etc.). Check the venue's guidelines for restricted items.",
                    ][index]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Popup */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
            <div className="bg-white p-6 rounded-md text-center">
              <h2 className="text-xl font-semibold mb-4">Message Sent!</h2>
              <p>Thank you for contacting us. We will get back to you shortly.</p>
              <button
                onClick={handleModalClose}
                className="mt-4 bg-navRed text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Booking */}
      <form className="space-y-6 px-4 md:px-8 lg:px-[100px]" onSubmit={handleBookingSubmit}>
        <div className="mt-[55px] text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-fancy" style={{ textShadow: "0 0 10px #fff, 0 0 30px #ff0000, 0 0 40px #ff0000" }}>Private Booking</h1>
          <p className="text-lg md:text-xl font-semibold mt-2">Book us for your next big event</p>
          <hr className="border-t border-gray-400 mt-6 mx-auto" />
        </div>
        <div>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-lg font-semibold mb-2">Name *</label>
            <input
              type="text"
              name="bookname"
              value={bookingFormData.bookname}
              onChange={handleBookingInputChange}
              className="w-full border border-gray-400 p-2 rounded-md text-black"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="bookemail"
              value={bookingFormData.bookemail}
              onChange={handleBookingInputChange}
              className="w-full border border-gray-400 p-2 rounded-md text-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Location *</label>
            <input
              type="address"
              name="location"
              value={bookingFormData.location}
              onChange={handleBookingInputChange}
              className="w-full border border-gray-400 p-2 rounded-md text-black"
              placeholder="Enter the location address"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-2">
          <div>
            <label className="block text-lg font-semibold mb-2">Date *</label>
            <input
              type="date"
              name="date"
              value={bookingFormData.date}
              onChange={handleBookingInputChange}
              min={new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split("T")[0]}
              className="w-full border border-gray-400 p-2 rounded-md text-black"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Starting Time *</label>
            <input
              type="time"
              name="starttime"
              value={bookingFormData.starttime}
              onChange={handleBookingInputChange}
              className="w-full border border-gray-400 p-2 rounded-md text-black"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Ending Time *</label>
            <input
              type="time"
              name="endtime"
              value={bookingFormData.endtime}
              onChange={(e) => {
                const selectedEndTime = e.target.value;
                const startTime = bookingFormData.starttime;
                if (startTime) {
                  const [startHour, startMinute] = startTime.split(":").map(Number);
                  const [endHour, endMinute] = selectedEndTime.split(":").map(Number);

                  const startTotalMinutes = startHour * 60 + startMinute;
                  const endTotalMinutes = endHour * 60 + endMinute;

                  if (endTotalMinutes - startTotalMinutes < 30) {
                    alert("The band must be booked for at least 30 minutes");
                    return;
                  }
                }
                handleBookingInputChange(e);
              }}
              className="w-full border border-gray-400 p-2 rounded-md text-black"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-2">
          <div>
            <label className="block text-lg font-semibold mb-2">Credit Card *</label>
            <div className="border border-gray-400 p-4 rounded-md bg-white">
              <label className="block mb-2 text-black font-semibold text-left">
                Card Number:
                <input
                  type="text"
                  name="cardNumber"
                  value={bookingFormData.cardNumber}
                  onChange={handleBookingInputChange}
                  placeholder='0000 0000 0000 0000'
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                />
              </label>
              <div className="flex items-center text-left font-semibold grid gap-4 grid-cols-2 text-black">
                <label>
                  Expiration Date:
                  <input
                    type="text"
                    name="expiryDate"
                    value={bookingFormData.expiryDate}
                    onChange={handleBookingInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md mt-1"
                    placeholder='MM/YY'
                  />
                </label>
                <label>
                  CVV:
                  <input
                    type="text"
                    name="cvv"
                    value={bookingFormData.cvv}
                    onChange={handleBookingInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md mt-1"
                    placeholder='0000'
                  />
                </label>
              </div>
              <div className="flex items-center text-left font-semibold grid gap-4 grid-cols-2 text-black">
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={bookingFormData.firstName}
                    onChange={handleBookingInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={bookingFormData.lastName}
                    onChange={handleBookingInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  />
                </label>
              </div>
              <label className = "block mt-2 text-left font-semibold text-black">
                  Billing Zip Code:
                  <input
                    type="text"
                    name="billingZip"
                    value={bookingFormData.billingZip}
                    onChange={handleBookingInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  />
                </label>
                <div className="mt-[15px] flex justify-center">
                <div className="block text-lg font-semibold flex items-center gap-5">
                  <label className="text-black font-semibold">Total Cost:</label>
                  <div className="text-center w-[120px] border border-gray-400 p-1 rounded-md text-black bg-gray-100 h-[37px]">
                    ${bookingFormData.cost}
                  </div>
                </div>
              </div>
              </div>
            </div>
          
          <div>

            <label className="block text-lg font-semibold mb-2 ">Additional Info</label>
            <textarea
              name="addinfo"
              value={bookingFormData.addinfo}
              onChange={handleBookingInputChange}
              className="w-full border border-gray-400 p-2 rounded-md text-black"
              rows="15"
              placeholder="Provide additional details here"
            ></textarea>
          </div>
        </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-navRed text-white font-semibold px-6 py-2 rounded-md hover:bg-navRed1 outline"
          >
            Submit
          </button>
        </div>
      </form>


      {showBookingModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
          <div className="bg-white p-6 rounded-md text-center">
            <h2 className="text-xl font-semibold mb-4">Thank you for booking with Stage Fright!</h2>
            <p>We can't wait to see you for your event.</p>
            <button
              onClick={handleBookingModalClose}
              className="mt-4 bg-navRed text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
