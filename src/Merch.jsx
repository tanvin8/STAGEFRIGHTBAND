import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MerchPopup from './components/MerchPopup';

const Merch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  const products = {
    bestSellers: [
      { id: 1, name: 'Skull Salazar Hoodie', price: '59.99', description: 'Stand out with a vibrant graphic print hoodie. Made from high-quality cotton blend fabric, this hoodie offers style and comfort for any casual occasion.', image: 'hoodie1.png', isMeasureable: true },
      { id: 2, name: 'Stage Fright Tumbler', price: '54.99', description: 'This tumbler is made from durable stainless steel, designed to keep beverages hot or cold for extended periods. Its double-wall insulation provides excellent temperature retention, while the sleek, rust-resistant exterior ensures long-lasting use and a modern, polished look.', image: 'WhiteTumbler.png' },
      { id: 3, name: 'These Whispers Black Shirt', price: '48.99', description: "Engineered with high-performance polyester, this shirt is lightweight and quick-drying. It’s ideal for active lifestyles and outdoor adventures, offering both durability and flexibility.", image: 'shirt3.png', isMeasureable: true },
      { id: 4, name: 'Stage Fright Classic Hoodie', price: '69.99', description: 'This hoodie proudly displays the band’s iconic logo front, with a minimalistic yet timeless vibe. It’s the go-to choice for fans who want to keep it simple but meaningful.', image: 'hoodie2.png', isMeasureable: true },
      { id: 5, name: 'Stage Fright White Cap', price: '29.99', description: 'Featuring a suede-feel brim, this cap adds a touch of luxury to casual looks. Its soft, supple texture offers a sophisticated feel while maintaining durability.', image: 'cap2.png' },
      { id: 6, name: 'Room For House Vintage Hoodie', price: '62.99', description: "Constructed from a lightweight yet durable fabric, this hoodie is made for comfort on the go. The vintage graphics are resistant to cracking or peeling, ensuring it stays sharp over time.", image: 'hoodie4.png', isMeasureable: true },

    ],
    hoodies: [
      { id: 7, name: 'Skull Salazar Hoodie', price: '59.99', description: 'Stand out with a vibrant graphic print hoodie. Made from high-quality cotton blend fabric, this hoodie offers style and comfort for any casual occasion.', image: 'hoodie1.png', isMeasureable: true},
      { id: 8, name: 'Stage Fright Classic Hoodie', price: '69.99', description: 'This hoodie proudly displays the band’s iconic logo front, with a minimalistic yet timeless vibe. It’s the go-to choice for fans who want to keep it simple but meaningful.', image: 'hoodie2.png', isMeasureable: true },
      { id: 9, name: 'These Whispers Album Hoodie', price: '55.99', description: 'This hoodie is crafted with breathable yet sturdy fabric for all-day comfort. Its minimalist soundwave design is applied using water-based inks, ensuring a smooth and eco-friendly finish.', image: 'hoodie3.png', isMeasureable: true },
      { id: 10, name: 'Room For House Vintage Hoodie', price: '62.99', description: "Constructed from a lightweight yet durable fabric, this hoodie is made for comfort on the go. The vintage graphics are resistant to cracking or peeling, ensuring it stays sharp over time.", image: 'hoodie4.png', isMeasureable: true },
      { id: 11, name: 'Pink Whispers Hoodie', price: '79.99', description: "This hoodie features double-stitched seams for durability and a relaxed fit for all-day comfort. The bold neon graphics are applied using a heat-pressed technique, ensuring long-lasting vibrancy.", image: 'hoodie5.png', isMeasureable: true },
      { id: 12, name: 'Eclipse Reverie Hoodie', price: '65.99', description: 'Crafted from a premium cotton-polyester blend, this hoodie offers a soft feel and durable wear. The design is printed with high-quality inks that resist fading, ensuring the celestial details stay vibrant.', image: 'hoodie6.png', isMeasureable: true },
      { id: 13, name: 'Steel and Shadows Tour Hoodie', price: '55.99', description: 'This hoodie features a brushed interior for extra softness and a comfortable oversized fit. Its edgy graphic is made with crack-proof ink, making it a durable statement piece for any wardrobe.', image: 'hoodie7.png', isMeasureable: true },
      { id: 14, name: 'Room For House Album Hoodie', price: '59.99', description: 'This hoodie combines comfort and nostalgia with its soft-touch fabric and bold, lasting prints. Featuring a kangaroo pocket, it’s perfect for keeping your hands warm or carrying small essentials.', image: 'hoodie8.png', isMeasureable: true},
    ],
    albums: [
        { id: 15, name: 'Room For House Album', price: '49.99', description: "This dynamic album celebrates individuality while embracing togetherness, inviting listeners to find their place within its eclectic tracks. From soulful ballads to electrifying choruses, it’s a vibrant exploration of sound and self-expression.", image: 'album1.png' },
        { id: 16, name: 'Steel & Shadows Album', price: '49.99', description: "Gritty and powerful, this album is a testament to resilience amidst chaos. It blends metallic riffs and shadowy undertones, crafting a soundscape that's both intense and cinematic.", image: 'album2.png' },
        { id: 17, name: 'These Whispers Album', price: '49.99', description: "Subtle yet profound, this album delves into secrets, quiet truths, and unspoken emotions. Ethereal melodies intertwine with electrifying beats to create an atmosphere that's hauntingly beautiful.", image: 'album3.png' },
        { id: 18, name: 'Afraid of Lines Album', price: '49.99', description: "Exploring themes of hesitation and boundaries, this album combines intricate guitar riffs with hauntingly poetic lyrics. It masterfully conveys the tension between fear and freedom, resonating with anyone who's ever been caught at life's crossroads.", image: 'album4.png' },
        { id: 19, name: 'Banquet Memory Album', price: '49.99', description: 'A nostalgic dive into fleeting moments and bittersweet celebrations, this album balances reflective ballads with explosive anthems. Its raw energy captures the highs and lows of shared experiences, leaving listeners both exhilarated and introspective.', image: 'album5.png' },
      ],
    shirts: [
        { id: 20, name: 'Black Stage Fright Shirt', price: '39.99', description: "Made from soft, breathable cotton, this shirt offers all-day comfort. Perfect for casual wear, it feels gentle against the skin and keeps you cool in warmer weather.", image: 'shirt1.png', isMeasureable: true },
        { id: 21, name: 'Red Stage Fright Shirt', price: '49.99', description: "Crafted from lightweight linen, this shirt exudes a relaxed, breezy elegance. Its natural texture and moisture-wicking properties make it ideal for warmer seasons.", image: 'shirt2.png' , isMeasureable: true},
        { id: 22, name: 'These Whispers Black Shirt', price: '48.99', description: "Engineered with high-performance polyester, this shirt is lightweight and quick-drying. It’s ideal for active lifestyles and outdoor adventures, offering both durability and flexibility.", image: 'shirt3.png', isMeasureable: true },
        { id: 23, name: 'These Whispers White Shirt', price: '36.99', description: "Crafted from soft chambray, this shirt balances casual style with sophistication. Its breathable fabric and subtle texture make it versatile for various occasions.", image: 'shirt4.png', isMeasureable: true },
        { id: 24, name: 'Steel and Shadows Graphic Shrirt', price: '59.99', description: "Featuring a soft, smooth modal blend, this shirt delivers exceptional comfort. Its silky feel and moisture-absorbing properties make it perfect for warm-weather wear.", image: 'shirt5.png', isMeasureable: true },
        { id: 25, name: 'Room For House Vintage Shirt', price: '49.99', description: "Made from a breathable cotton-blend, this shirt offers the softness of cotton combined with enhanced durability and stretch for versatile everyday wear.", image: 'shirt6.png', isMeasureable: true },
        { id: 26, name: 'Room For House Shirt', price: '35.99', description: "Crafted with a touch of Lycra for added stretch, this shirt provides comfort and flexibility. Perfect for both work and play, it moves with you while maintaining a sleek look.", image: 'shirt7.png', isMeasureable: true },
        { id: 27, name: 'Steel and Shadows Shirt', price: '39.99', description: "Featuring eco-friendly Tencel fabric, this shirt is soft, sustainable, and moisture-wicking. Its smooth finish and lightweight feel make it ideal for a more eco-conscious wardrobe.", image: 'shirt8.png', isMeasureable: true },
    ],
    caps: [
      { id: 28, name: 'Steel and Shadows Cap', price: '24.99', description: "Crafted from durable cotton twill, this cap offers a structured fit and timeless style. Perfect for casual outings, its embroidered logo adds a touch of elegance.", image: 'cap1.png' },
      { id: 29, name: 'Room For House Cap', price: '22.99', description: "Made with a soft cotton blend, this cap provides a relaxed fit and classic appeal. Its versatile design suits both casual and semi-formal attire.", image: 'cap3.png' },
      { id: 30, name: 'These Whispers Cap', price: '27.99', description: "Constructed from breathable performance fabric, this cap is ideal for active lifestyles. Its moisture-wicking properties and adjustable strap ensure a comfortable fit.", image: 'cap4.png' },
      { id: 31, name: 'Stage Fright White Cap', price: '29.99', description: 'Featuring a suede-feel brim, this cap adds a touch of luxury to casual looks. Its soft, supple texture offers a sophisticated feel while maintaining durability.', image: 'cap2.png' },
      { id: 32, name: 'Stage Fright Blue Cap', price: '29.99', description: 'This cap’s vibrant color and sleek design make it a standout accessory. Made from a lightweight, breathable material, it offers comfort and style for any outdoor activity.', image: 'cap5.png' },
      { id: 33, name: 'Stage Fright Black Cap', price: '28.99', description: 'The minimalist black cap is crafted with a structured fit and metal accents. Perfect for adding a sleek, modern edge to any outfit.', image: 'cap6.png' },
    ],
    accessories: [
      { id: 34,
        name: 'Stage Fright Tumbler', 
        price: '54.99', 
        description: 'This tumbler is made from durable stainless steel, designed to keep beverages hot or cold for extended periods. Its double-wall insulation provides excellent temperature retention, while the sleek, rust-resistant exterior ensures long-lasting use and a modern, polished look.', 
        image: 'WhiteTumbler.png', 
        alt: 'White Stage Fright Tumbler' },
      { id: 35, 
        name: 'Cotton Towel', 
        price: '19.99', 
        description: 'Made from 100% organic cotton, this towel offers plush softness and absorbency. Its eco-friendly production and minimalistic design make it a sustainable choice for everyday use.', 
        image: 'BlackTowel.png', 
        alt: 'Black Microfiber Towel' },
      { id: 36, name: 'Microfiber Towel', 
        price: '17.99', 
        description: 'Ultra-lightweight and highly absorbent, this microfiber towel is perfect for travel and outdoor activities. Its quick-drying fabric ensures convenience and hygiene.', 
        image: 'BlueTowel.png', 
        alt: 'Blue Microfiber Tower' },
      { id: 37, 
        name: 'Stainless Steel Bottle', 
        price: '34.99', 
        description: 'Designed for versatility, this stainless steel bottle features a wide mouth for easy filling and cleaning. Its double-wall insulation keeps drinks at the desired temperature for hours.', 
        image: 'StainlessSteelBottle.png', 
        alt: 'Stainless Steel Stage Fright Water Bottle' },
      { id: 38, 
        name: 'Alloy Metal Keychain', 
        price: '14.99', 
        description: "Made from durable alloy, this keychain combines style with functionality. Its compact design and secure clasp make it perfect for everyday use.", 
        image: 'CircularKeychain.png', 
        alt: "Alloy Metal Circular Keychain" },
      { id: 39, 
        name: 'Stainless Steel Keychain', 
        price: '16.99', 
        description: "This sleek keychain features a brushed stainless steel finish for a modern look. Its sturdy build ensures longevity and practicality for daily use.", 
        image: 'StarKeychain.png', 
        alt: 'Stainless Steel Star Shaped Keychain' },
    ]
  }



  //localStorage.setItem('key', JSON.stringify(products.bestSellers));
//const test = products.bestSellers[0].name
const test1 = localStorage.setItem('key',JSON.stringify(products.bestSellers));
    
  //localStorage.setItem('key', JSON.stringify(test1))
// Retrieving data from local storage
const storedData = localStorage.getItem('key');

  

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[400px]">
        <img
          src="merchHero.jpg"
          alt="Merch Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Merch Collection</h1>
        </div>
      </div>

      {/*  Navbar */}
      <div className="sticky top-[128px] bg-navBlue text-white shadow-md z-10 font-semibold text-[17px]">
        <nav className="flex justify-center space-x-6 py-3">
          <Link to="bestSellers" smooth={true} duration={500} offset={-200} className="cursor-pointer hover:text-blue-300">
            Best Sellers
          </Link>
          <Link to="albums" smooth={true} duration={500} offset={-200} className="cursor-pointer hover:text-blue-300">
            Albums
          </Link>
          <Link to="hoodies" smooth={true} duration={500} offset={-200} className="cursor-pointer hover:text-blue-300">
            Hoodies
          </Link>
          <Link to="shirts" smooth={true} duration={500} offset={-200} className="cursor-pointer hover:text-blue-300">
            Shirts
          </Link>
          <Link to="caps" smooth={true} duration={500} offset={-200} className="cursor-pointer hover:text-blue-300">
            Caps
          </Link>
          <Link to="accessories" smooth={true} duration={500} offset={-200} className="cursor-pointer hover:text-blue-300">
            Accessories
          </Link>
        </nav>
      </div>

      {/* Page Content */}
      <div className="space-y-4 p-8 bg-pageBlack text-black">
        {/* Best Sellers */}
        <section id="bestSellers" className="min-h-screen scroll-mt-12 ">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {products.bestSellers.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-md shadow-lg cursor-pointer bg-white ml-[40px] mb-[30px]"
                onClick={() => openModal(product)}
              >
                <img src={product.image} alt={product.name} className="items-center mb-4 h-[320px] ml-[8px]" />
                <p className="font-bold text-[20px] text-center">{product.name} </p>
                <p className="text-black text-center">${product.price} </p>
                <button
                  onClick={() => openModal(product)}
                  className="w-full mt-4 bg-black hover:bg-gray-400 text-white py-2 px-4 rounded"
                >
                  Select Item
                </button>
              </div>
            ))}
          </div>
          <div className="pt-10"></div> 
        </section>

        {/* Albums */}
        <section id="albums" className="min-h-screen scroll-mt-24 text-black">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {products.albums.map((album) => (
              <div
                key={album.id}
                className="border p-4 rounded-md shadow-lg cursor-pointer bg-white ml-[40px] mb-[30px]"
                onClick={() => openModal(album)}
              >
                <img src={album.image} alt={album.name} className="items-center mb-4  ml-[8px]" />
                <p className="font-bold text-[20px] text-center">{album.name}</p>
                <p className="text-black text-center">${album.price}</p>
                <button
                  onClick={() => openModal(album)}
                  className="w-full mt-4 bg-black hover:bg-gray-400 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="pt-10"></div> 
        </section>

        {/* Hoodies */}
        <section id="hoodies" className="min-h-screen scroll-mt-24 text-black">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Hoodies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {products.hoodies.map((hoodie) => (
              <div
                key={hoodie.id}
                className="border p-4 rounded-md shadow-lg cursor-pointer bg-white ml-[40px] mb-[30px]"
                onClick={() => openModal(hoodie)}
              >
                <img src={hoodie.image} alt={hoodie.name} className="items-center mb-4 h-[320px] ml-[8px]" />
                <p className="font-bold text-[20px] text-center">{hoodie.name}</p>
                <p className="text-black text-center">${hoodie.price}</p>
                <button
                  onClick={() => openModal(hoodie)}
                  className="w-full mt-4 bg-black hover:bg-gray-400 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="pt-10"></div> 
        </section>

        {/* Shirts */}
        <section id="shirts" className="min-h-screen scroll-mt-24 text-black">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Shirts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {products.shirts.map((shirt) => (
              <div
                key={shirt.id}
                className="border p-4 rounded-md shadow-lg cursor-pointer bg-white ml-[40px] mb-[30px]"
                onClick={() => openModal(shirt)}
              >
                <img src={shirt.image} alt={shirt.name} className="items-center mb-4 h-[320px] ml-[8px] " />
                <p className="font-bold text-[20px] text-center">{shirt.name}</p>
                <p className="text-black text-center">${shirt.price}</p>
                <button
                  onClick={() => openModal(shirt)}
                  className="w-full mt-4 bg-black hover:bg-gray-400 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="pt-10"></div> 
        </section>

        {/* Caps */}
        <section id="caps" className="min-h-screen scroll-mt-24 text-black">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Caps</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {products.caps.map((cap) => (
              <div
                key={cap.id}
                className="border p-4 rounded-md shadow-lg cursor-pointer bg-white ml-[40px] mb-[30px]"
                onClick={() => openModal(cap)}
              >
                <img src={cap.image} alt={cap.name} className="items-center mb-4 h-[320px] ml-[8px]" />
                <p className="font-bold text-[20px] text-center">{cap.name}</p>
                <p className="text-black text-center">${cap.price}</p>
                <button
                  onClick={() => openModal(cap)}
                  className="w-full mt-4 bg-black hover:bg-gray-400 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="pt-10"></div> 
        </section>

      {/* accessories */}
      <section id="accessories" className="min-h-screen scroll-mt-24 text-black">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {products.accessories.map((accessory) => (
              <div
                key={accessory.id}
                className="border p-4 rounded-md shadow-lg cursor-pointer bg-white ml-[40px] mb-[30px]"
                onClick={() => openModal(accessory)}
              >
                <img src={accessory.image} alt={accessory.name} className="items-center mb-4 h-[320px] ml-[8px]" />
                <p className="font-bold text-[20px] text-center">{accessory.name}</p>
                <p className="text-black text-center">${accessory.price}</p>
                <button
                  onClick={() => openModal(accessory)}
                  className="w-full mt-4 bg-black hover:bg-gray-400 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="pt-10"></div> 
        </section>
      </div>

      {/* Product Modal */}
      <MerchPopup isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default Merch;
