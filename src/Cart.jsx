import React, { useState } from 'react';

const Cart = () => {
  const storedData1 = localStorage.getItem('cart');
  const [cartItems, setCartItems] = useState(JSON.parse(storedData1) || []);
  const [billingDetails, setBillingDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    billingZip: ''
  });
  const [shippingDetails, setShippingDetails] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    zip: '',
    state: '',
    country: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // Validate required fields before opening the modal
    if (
      !billingDetails.cardNumber ||
      !billingDetails.expiryDate ||
      !billingDetails.cvv ||
      !billingDetails.firstName ||
      !billingDetails.lastName ||
      !billingDetails.billingZip ||
      !shippingDetails.email ||
      !shippingDetails.firstName ||
      !shippingDetails.lastName ||
      !shippingDetails.address ||
      !shippingDetails.zip ||
      !shippingDetails.state ||
      !shippingDetails.country
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCartItems([]);
    setBillingDetails({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      firstName: '',
      lastName: '',
      billingZip: ''
    });
    setShippingDetails({
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      zip: '',
      state: '',
      country: ''
    });
    localStorage.setItem('cart', JSON.stringify([]));
    setIsModalOpen(false);
  };

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return acc + (item.isTour ? price : price * quantity);
  }, 0);

  const tax = subtotal * 0.0625;
  const total = subtotal + tax;

  const Modal = ({ closeModal }) => (
    <div className="font-quicksand fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <p className="text-lg font-semibold text-black">Your order has been placed successfully!</p>
        <p className="mt-2 text-gray-600">Thank you for choosing Stage Fright</p>
        <button
          className="mt-4 bg-navRed text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="font-quicksand text-center bg-pageBlack text-white p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Order Details Section */}
        <div className="lg:w-1/2 lg:ml-16 mx-4">
          <h2 className="py-8 text-2xl font-bold mb-[-40px]">Billing Details</h2>
          <div className="mt-4 border border-gray-400 p-4 rounded-md bg-white">
            <label className="block mb-2 text-black font-semibold text-left">
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={billingDetails.cardNumber}
                onChange={(e) => setBillingDetails({ ...billingDetails, cardNumber: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded-md mt-1"
                placeholder="0000 0000 0000 0000"
                required
              />
            </label>
            <div className="flex items-center text-left font-semibold grid gap-4 grid-cols-1 md:grid-cols-2 text-black">
              <label>
                Expiration Date:
                <input
                  type="text"
                  name="expiryDate"
                  value={billingDetails.expiryDate}
                  onChange={(e) => setBillingDetails({ ...billingDetails, expiryDate: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  placeholder="MM/YY"
                  required
                />
              </label>
              <label>
                CVV:
                <input
                  type="text"
                  name="cvv"
                  value={billingDetails.cvv}
                  onChange={(e) => setBillingDetails({ ...billingDetails, cvv: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  placeholder="000"
                  required
                />
              </label>
            </div>
            <div className="flex items-center text-left font-semibold grid gap-4 grid-cols-1 md:grid-cols-2 text-black">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={(e) => setBillingDetails({ ...billingDetails, firstName: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={billingDetails.lastName}
                  onChange={(e) => setBillingDetails({ ...billingDetails, lastName: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
            </div>
            <label className="block mt-2 text-left font-semibold text-black">
              Billing Zip Code:
              <input
                type="text"
                name="billingZip"
                value={billingDetails.billingZip}
                onChange={(e) => setBillingDetails({ ...billingDetails, billingZip: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded-md mt-1"
                required
              />
            </label>
          </div>

          <h2 className="py-2 text-2xl font-bold mt-[30px]">Shipping Details</h2>
          <div className="border border-gray-400 p-4 rounded-md bg-white">
            <label className="block mb-2 text-black font-semibold text-left">
              Email Address:
              <input
                type="email"
                name="email"
                value={shippingDetails.email}
                onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded-md mt-1"
                required
              />
            </label>
            <div className="flex items-center text-left font-semibold grid gap-4 grid-cols-1 md:grid-cols-2 text-black">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={shippingDetails.firstName}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, firstName: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={shippingDetails.lastName}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, lastName: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
            </div>
            <div className="flex items-center text-left font-semibold grid gap-4 grid-cols-1 md:grid-cols-2 text-black">
              <label>
                Address Line:
                <input
                  type="text"
                  name="address"
                  value={shippingDetails.address}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
              <label>
                Zip Code:
                <input
                  type="text"
                  name="zip"
                  value={shippingDetails.zip}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, zip: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
            </div>
            <div className="flex items-center text-left font-semibold grid gap-4 grid-cols-1 md:grid-cols-2 text-black">
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  value={shippingDetails.state}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, state: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={shippingDetails.country}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, country: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-md mt-1"
                  required
                />
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/2 lg:mr-16 mx-4">
          <h2 className="py-8 text-2xl font-bold">Order Summary</h2>
          <div className="flex justify-between mt-2 text-lg font-medium mb-4 border-b border-gray-400 pb-2">
            <span>QTY</span>
            <span>ITEM</span>
            <span>PRICE</span>
          </div>
          <div className="flex flex-col text-white gap-4 mb-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center pb-1">
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-400 ml-2 font-bold font-quicksand"
                >
                  X
                </button>
                <span className="ml-4">{item.quantity}</span>
                <span className="ml-[35%]">{item.name}</span>
                <span className="ml-auto">${item.price}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 border-t border-gray-300 pt-4">
            <div className="flex justify-between text-xl">
              <span className="font-semibold">Subtotal:</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl">
              <span className="font-semibold">Tax:</span>
              <span className="font-semibold">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={openModal}
            className="bg-navRed text-white font-bold py-2 px-4 rounded w-full mt-6"
          >
            Place Order
          </button>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Cart;