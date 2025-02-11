import React, { useState, useEffect } from 'react';

const MerchPopup = ({ isOpen, product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizingGuide, setShowSizingGuide] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const products1 = {
    bestSellers: [
      { id: 1, name: 'Skull Salazar Hoodie', price: '59.99', description: 'Stand out with a vibrant graphic print hoodie. Made from high-quality cotton blend fabric, this hoodie offers style and comfort for any casual occasion.', image: 'hoodie1.png', isMeasureable: true },
      { id: 2, name: 'Stage Fright Tumbler', price: '54.99', description: 'This tumbler is made from durable stainless steel, designed to keep beverages hot or cold for extended periods. Its double-wall insulation provides excellent temperature retention, while the sleek, rust-resistant exterior ensures long-lasting use and a modern, polished look.', image: 'WhiteTumbler.png' },
      { id: 3, name: 'These Whispers Red Shirt', price: '48.99', description: "Engineered with high-performance polyester, this shirt is lightweight and quick-drying. It’s ideal for active lifestyles and outdoor adventures, offering both durability and flexibility.", image: 'shirt3.png', isMeasureable: true },
      { id: 4, name: 'Stage Fright White Cap', price: '29.99', description: 'Featuring a suede-feel brim, this cap adds a touch of luxury to casual looks. Its soft, supple texture offers a sophisticated feel while maintaining durability.', image: 'cap2-rem.png' },
    ],
    hoodies: [
      { id: 5, name: 'Skull Salazar Hoodie', price: '59.99', description: 'Stand out with a vibrant graphic print hoodie. Made from high-quality cotton blend fabric, this hoodie offers style and comfort for any casual occasion.', image: 'hoodie1.png', isMeasureable: true},
      { id: 6, name: 'Stage Fright Classic Hoodie', price: '69.99', description: 'This hoodie proudly displays the band’s iconic logo front, with a minimalistic yet timeless vibe. It’s the go-to choice for fans who want to keep it simple but meaningful.', image: 'hoodie2.png', isMeasureable: true },
      { id: 7, name: 'These Whispers Album Hoodie', price: '55.99', description: 'This hoodie is crafted with breathable yet sturdy fabric for all-day comfort. Its minimalist soundwave design is applied using water-based inks, ensuring a smooth and eco-friendly finish.', image: 'hoodie3-rem.png', isMeasureable: true },
      { id: 8, name: 'Room For House Vintage Hoodie', price: '62.99', description: "Constructed from a lightweight yet durable fabric, this hoodie is made for comfort on the go. The vintage graphics are resistant to cracking or peeling, ensuring it stays sharp over time.", image: 'hoodie4.png', isMeasureable: true },
      { id: 9, name: 'Pink Whispers Hoodie', price: '79.99', description: "This hoodie features double-stitched seams for durability and a relaxed fit for all-day comfort. The bold neon graphics are applied using a heat-pressed technique, ensuring long-lasting vibrancy.", image: 'hoodie5.png', isMeasureable: true },
      { id: 10, name: 'Eclipse Reverie Hoodie', price: '65.99', description: 'Crafted from a premium cotton-polyester blend, this hoodie offers a soft feel and durable wear. The design is printed with high-quality inks that resist fading, ensuring the celestial details stay vibrant.', image: 'hoodie6.png', isMeasureable: true },
      { id: 11, name: 'Steel and Shadows Tour Hoodie', price: '55.99', description: 'This hoodie features a brushed interior for extra softness and a comfortable oversized fit. Its edgy graphic is made with crack-proof ink, making it a durable statement piece for any wardrobe.', image: 'hoodie7.png', isMeasureable: true },
      { id: 12, name: 'Room For House Album Hoodie', price: '59.99', description: 'This hoodie combines comfort and nostalgia with its soft-touch fabric and bold, lasting prints. Featuring a kangaroo pocket, it’s perfect for keeping your hands warm or carrying small essentials.', image: 'hoodie8.png', isMeasureable: true},
    ],
    albums: [
      { id: 13, name: 'Room For House Album', price: '49.99', description: "This dynamic album celebrates individuality while embracing togetherness, inviting listeners to find their place within its eclectic tracks. From soulful ballads to electrifying choruses, it’s a vibrant exploration of sound and self-expression. \n\nTrack List \n1. Four Walls \n2. Basement Riot \n3. Static Nights \n4. Locked Doors \n5. House in Flames", image: 'album1.png' },
      { id: 14, name: 'Steel & Shadows Album', price: '49.99', description: "Gritty and powerful, this album is a testament to resilience amidst chaos. It blends metallic riffs and shadowy undertones, crafting a soundscape that's both intense and cinematic. \n\nTrack List \n1. Forged in Fire \n2. Iron Will \n3. Blade's Reflection \n4. Shadow's End \n5. March of the Unbroken", image: 'album2.png' },
      { id: 15, name: 'These Whispers Album', price: '49.99', description: "Subtle yet profound, this album delves into secrets, quiet truths, and unspoken emotions. Ethereal melodies intertwine with electrifying beats to create an atmosphere that's hauntingly beautiful. \n\nTrack List \n1. Silent Screams \n2. Midnight Echo \n3. Fading Footsteps \n4. Ghost in the Hall \n5. Vanishing Words", image: 'album3-rem.png' },
      { id: 16, name: 'Afraid of Lines Album', price: '49.99', description: "Exploring themes of hesitation and boundaries, this album combines intricate guitar riffs with hauntingly poetic lyrics. It masterfully conveys the tension between fear and freedom, resonating with anyone who's ever been caught at life's crossroads. \n\nTrack list \n1. Blurred Borders \n2. Inside the Margins \n3. Erased Traces \n4. Lost Between Roads \n5. Drawing in the Dark", image: 'album4.png' },
      { id: 17, name: 'Banquet Memory Album', price: '49.99', description: 'A nostalgic dive into fleeting moments and bittersweet celebrations, this album balances reflective ballads with explosive anthems. Its raw energy captures the highs and lows of shared experiences, leaving listeners both exhilarated and introspective. \n\nTrack List \n1. Fading Echoes \n2. Shattered Glass \n3. Golden Yesterday \n4. Reunion Fires \n5. Final Toast', image: 'album5.png' },
      ],
    shirts: [
      { id: 18, name: 'Black Stage Fright Shirt', price: '39.99', description: "Made from soft, breathable cotton, this shirt offers all-day comfort. Perfect for casual wear, it feels gentle against the skin and keeps you cool in warmer weather.", image: 'shirt1.png', isMeasureable: true },
      { id: 19, name: 'Red Stage Fright Shirt', price: '49.99', description: "Crafted from lightweight linen, this shirt exudes a relaxed, breezy elegance. Its natural texture and moisture-wicking properties make it ideal for warmer seasons.", image: 'shirt2.png' , isMeasureable: true},
      { id: 20, name: 'These Whispers Black Shirt', price: '48.99', description: "Engineered with high-performance polyester, this shirt is lightweight and quick-drying. It’s ideal for active lifestyles and outdoor adventures, offering both durability and flexibility.", image: 'shirt3.png', isMeasureable: true },
      { id: 21, name: 'These Whispers White Shirt', price: '36.99', description: "Crafted from soft chambray, this shirt balances casual style with sophistication. Its breathable fabric and subtle texture make it versatile for various occasions.", image: 'shirt4-rem.png', isMeasureable: true },
      { id: 22, name: 'Steel and Shadows Graphic Shrirt', price: '59.99', description: "Featuring a soft, smooth modal blend, this shirt delivers exceptional comfort. Its silky feel and moisture-absorbing properties make it perfect for warm-weather wear.", image: 'shirt5.png', isMeasureable: true },
      { id: 23, name: 'Room For House Vintage Shirt', price: '49.99', description: "Made from a breathable cotton-blend, this shirt offers the softness of cotton combined with enhanced durability and stretch for versatile everyday wear.", image: 'shirt6.png', isMeasureable: true },
      { id: 24, name: 'Room For House Graphic Shirt', price: '35.99', description: "Crafted with a touch of Lycra for added stretch, this shirt provides comfort and flexibility. Perfect for both work and play, it moves with you while maintaining a sleek look.", image: 'shirt7.png',  isMeasureable: true },
      { id: 25, name: 'Steel and Shadows Shirt',price: '39.99', description: "Featuring eco-friendly Tencel fabric, this shirt is soft, sustainable, and moisture-wicking. Its smooth finish and lightweight feel make it ideal for a more eco-conscious wardrobe.", image: 'shirt8.png', isMeasureable: true },
    ],
    caps: [
      { id: 26, name: 'Steel and Shadows Cap', price: '24.99', description: "Crafted from durable cotton twill, this cap offers a structured fit and timeless style. Perfect for casual outings, its embroidered logo adds a touch of elegance.", image: 'cap1.png' },
      { id: 27, name: 'Room For House Cap', price: '22.99', description: "Made with a soft cotton blend, this cap provides a relaxed fit and classic appeal. Its versatile design suits both casual and semi-formal attire.", image: 'cap3.png' },
      { id: 28, name: 'These Whispers Cap', price: '27.99', description: "Constructed from breathable performance fabric, this cap is ideal for active lifestyles. Its moisture-wicking properties and adjustable strap ensure a comfortable fit.", image: 'cap4-rem.png' },
      { id: 29, name: 'Stage Fright White Cap', price: '29.99', description: 'Featuring a suede-feel brim, this cap adds a touch of luxury to casual looks. Its soft, supple texture offers a sophisticated feel while maintaining durability.', image: 'cap2-rem.png' },
      { id: 30, name: 'Stage Fright Blue Cap', price: '29.99', description: 'This cap’s vibrant color and sleek design make it a standout accessory. Made from a lightweight, breathable material, it offers comfort and style for any outdoor activity.', image: 'cap5.png' },
    ],
    accessories: [
      { id: 31, name: 'Stage Fright Tumbler', price: '54.99', description: 'This tumbler is made from durable stainless steel, designed to keep beverages hot or cold for extended periods. Its double-wall insulation provides excellent temperature retention, while the sleek, rust-resistant exterior ensures long-lasting use and a modern, polished look.', image: 'WhiteTumbler.png' },
      { id: 32, name: 'Cotton Towel', price: '19.99', description: 'Made from 100% organic cotton, this towel offers plush softness and absorbency. Its eco-friendly production and minimalistic design make it a sustainable choice for everyday use.', image: 'BlueTowel.png' },
      { id: 33, name: 'Stainless Steel Bottle', price: '34.99', description: 'Designed for versatility, this stainless steel bottle features a wide mouth for easy filling and cleaning. Its double-wall insulation keeps drinks at the desired temperature for hours.', image: 'StainlessSteelBottle.png' },
      { id: 34, name: 'Alloy Metal Keychain', price: '14.99', description: "Made from durable alloy, this keychain combines style with functionality. Its compact design and secure clasp make it perfect for everyday use.", image: 'StarKeychain.png' },
      { id: 35, name: 'Stainless Steel Keychain', price: '16.99', description: "This sleek keychain features a brushed stainless steel finish for a modern look. Its sturdy build ensures longevity and practicality for daily use.", image: 'CircularKeychain.png' },
    ]
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