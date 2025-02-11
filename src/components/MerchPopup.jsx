import React, { useState, useEffect } from 'react';

const MerchPopup = ({ isOpen, product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizingGuide, setShowSizingGuide] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const products1 = {
    // ... (your product data remains the same)
  };

  useEffect(() => {
    if (isOpen && product) {
      setSelectedSize(null);
      setQuantity(1);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const sizes = ['EU XS / US XS', 'EU S / US S', 'EU M / US M', 'EU L / US L', 'EU XL / US XL', 'EU XXL / US XXL'];

  const toggleSizingGuide = () => setShowSizingGuide(!showSizingGuide);

  const QuantityButton = () => {
    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

    return (
      <div className="flex items-center w-full">
        <button onClick={handleDecrement} className="border-white font-semibold text-xs w-[30px] h-[30px] border">-</button>
        <span className="w-full border h-[30px] border-white text-center">{quantity}</span>
        <button onClick={handleIncrement} className="border-white font-semibold text-xs w-[30px] h-[30px] border">+</button>
      </div>
    );
  };

  const handleAddToCart = () => {
    if (!product.isMeasureable || selectedSize) {
      let oldCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = oldCartItems.find(item => item.name === product.name);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        oldCartItems.push({
          name: product.name,
          price: product.price,
          description: product.description,
          quantity: quantity,
          isTour: false
        });
      }

      localStorage.setItem('cart', JSON.stringify(oldCartItems));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto p-4">
      <div className="bg-stone-500 text-white w-full max-w-6xl mx-auto p-4 lg:p-6 rounded-lg relative shadow-lg overflow-auto">
        <button onClick={onClose} className="absolute top-4 right-4 hover:text-black text-3xl font-bold">
          &times;
        </button>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={product.image} alt={product.name} className="w-full max-w-md rounded-lg object-cover" />
          </div>

          <div className="w-full lg:w-1/2 p-4 lg:p-6">
            <h2 className="font-fancy text-2xl lg:text-3xl font-bold mb-4" style={{ textShadow: "0 0 3px #000000, 0 0 5px #000000, 0 0 10px #000000, 0 0 20px #FFFFFF" }}>
              {product.name}
            </h2>
            <p className="font-quicksand text-xl lg:text-2xl font-semibold mb-4">${product.price}</p>
            <p className="whitespace-pre-line font-quicksand mb-6 text-sm lg:text-base">{product.description}</p>

            {product.isMeasureable && (
              <>
                <h3 className="text-lg font-medium mb-2">Choose a size</h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mb-6">
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 border rounded-md text-sm ${
                        selectedSize === size
                          ? 'bg-stone-800 text-white'
                          : 'border-white text-white hover:bg-stone-300 hover:text-black'
                      } transition`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="flex mb-4">
              <h1 className="text-lg font-medium mr-4">Quantity:</h1>
              <QuantityButton />
            </div>

            {product.isMeasureable && (
              <button onClick={toggleSizingGuide} className="mb-4 hover:text-gray-300 underline">
                View Sizing Guide
              </button>
            )}

            <button
              onClick={handleAddToCart}
              disabled={product.isMeasureable && !selectedSize}
              className={`w-full py-2 lg:py-3 rounded-md text-lg font-medium ${
                (!product.isMeasureable || selectedSize)
                  ? 'bg-stone-800 text-white hover:bg-stone-950 transition'
                  : 'bg-stone-300 text-black cursor-not-allowed'
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {showSizingGuide && (
        <div className=" font-quicksand fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end items-start">
          <div className="bg-stone-400 w-[550px] text-white p-6 relative shadow-lg overflow-auto h-full">
            <button
              onClick={toggleSizingGuide}
              className="absolute top-4 left-4 text- hover:text-black text-3xl font-bold"
            >
              &times;
            </button>
            <img src="sizingGuide.png" alt="Sizing Guide Graphic" className="w-50 h-50 mt-2" />
            <h2 className=" font-quicksand text-2xl font-bold mb-4 mt-10">View Sizing Guide</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-stone-400 border-collapse border-2 border-white">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Size</th>
                    {sizes.map((size, index) => (
                      <th key={index} className="border-2 border-white px-4 py-2 text-[15px] font-bold">
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* measurement data */}
                  {[
                    { name: 'A - Chest', values: [64.0, 66.0, 68.0, 70.0, 72.0, 74.0] },
                    { name: 'B - Front length', values: [59.0, 61.0, 63.0, 65.0, 67.0, 69.0] },
                    { name: 'C - Sleeve length', values: [59.0, 60.0, 61.0, 62.0, 63.0, 64.0] },
                    { name: 'D - Back width', values: [46.0, 47.5, 49.0, 50.5, 52.0, 53.5] },
                    { name: 'E - Arm width', values: [21.5, 22.5, 23.5, 24.5, 25.5, 26.5] }
                  ].map((measurement, index) => (
                    <tr key={index}>
                      <td className="border-2 border-white px-4 py-2 font-bold">{measurement.name}</td>
                      {measurement.values.map((value, idx) => (
                        <td key={idx} className="border-2 border-white px-4 py-2">{value} cm</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchPopup;