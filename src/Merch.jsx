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
      { id: 3, name: 'These Whispers Red Shirt', price: '48.99', description: "Engineered with high-performance polyester, this shirt is lightweight and quick-drying. It’s ideal for active lifestyles and outdoor adventures, offering both durability and flexibility.", image: 'shirt3.png', isMeasureable: true },
      { id: 5, name: 'Stage Fright White Cap', price: '29.99', description: 'Featuring a suede-feel brim, this cap adds a touch of luxury to casual looks. Its soft, supple texture offers a sophisticated feel while maintaining durability.', image: 'cap2-rem.png' },
    ],
    hoodies: [
      { id: 7, name: 'Skull Salazar Hoodie', price: '59.99', description: 'Stand out with a vibrant graphic print hoodie. Made from high-quality cotton blend fabric, this hoodie offers style and comfort for any casual occasion.', image: 'hoodie1.png', isMeasureable: true},
      { id: 8,  name: 'Stage Fright Classic Hoodie', price: '69.99', description: 'This hoodie proudly displays the band’s iconic logo front, with a minimalistic yet timeless vibe. It’s the go-to choice for fans who want to keep it simple but meaningful.', image: 'hoodie2.png', isMeasureable: true },
      { id: 9, name: 'These Whispers Album Hoodie', price: '55.99', description: 'This hoodie is crafted with breathable yet sturdy fabric for all-day comfort. Its minimalist soundwave design is applied using water-based inks, ensuring a smooth and eco-friendly finish.', image: 'hoodie3-rem.png', isMeasureable: true },
      { id: 10, name: 'Room For House Vintage Hoodie', price: '62.99', description: "Constructed from a lightweight yet durable fabric, this hoodie is made for comfort on the go. The vintage graphics are resistant to cracking or peeling, ensuring it stays sharp over time.", image: 'hoodie4.png', isMeasureable: true },
      { id: 11,  name: 'Pink Whispers Hoodie', price: '79.99', description: "This hoodie features double-stitched seams for durability and a relaxed fit for all-day comfort. The bold neon graphics are applied using a heat-pressed technique, ensuring long-lasting vibrancy.", image: 'hoodie5.png', isMeasureable: true },
      { id: 12,  name: 'Eclipse Reverie Hoodie', price: '65.99', description: 'Crafted from a premium cotton-polyester blend, this hoodie offers a soft feel and durable wear. The design is printed with high-quality inks that resist fading, ensuring the celestial details stay vibrant.', image: 'hoodie6.png', isMeasureable: true },
      { id: 13,  name: 'Steel and Shadows Tour Hoodie', price: '55.99', description: 'This hoodie features a brushed interior for extra softness and a comfortable oversized fit. Its edgy graphic is made with crack-proof ink, making it a durable statement piece for any wardrobe.', image: 'hoodie7.png', isMeasureable: true },
      { id: 14,  name: 'Room For House Album Hoodie', price: '59.99', description: 'This hoodie combines comfort and nostalgia with its soft-touch fabric and bold, lasting prints. Featuring a kangaroo pocket, it’s perfect for keeping your hands warm or carrying small essentials.', image: 'hoodie8.png', isMeasureable: true},
    ],
    albums: [
        { id: 15, name: 'Room For House Album', price: '49.99', description: "This dynamic album celebrates individuality while embracing togetherness, inviting listeners to find their place within its eclectic tracks. From soulful ballads to electrifying choruses, it’s a vibrant exploration of sound and self-expression. \n\nTrack List \n1. Four Walls \n2. Basement Riot \n3. Static Nights \n4. Locked Doors \n5. House in Flames", image: 'album1.png' },
        { id: 16, name: 'Steel & Shadows Album', price: '49.99', description: "Gritty and powerful, this album is a testament to resilience amidst chaos. It blends metallic riffs and shadowy undertones, crafting a soundscape that's both intense and cinematic. \n\nTrack List \n1. Forged in Fire \n2. Iron Will \n3. Blade's Reflection \n4. Shadow's End \n5. March of the Unbroken", image: 'album2.png' },
        { id: 17, name: 'These Whispers Album', price: '49.99', description: "Subtle yet profound, this album delves into secrets, quiet truths, and unspoken emotions. Ethereal melodies intertwine with electrifying beats to create an atmosphere that's hauntingly beautiful. \n\nTrack List \n1. Silent Screams \n2. Midnight Echo \n3. Fading Footsteps \n4. Ghost in the Hall \n5. Vanishing Words", image: 'album3-rem.png' },
        { id: 18, name: 'Afraid of Lines Album', price: '49.99', description: "Exploring themes of hesitation and boundaries, this album combines intricate guitar riffs with hauntingly poetic lyrics. It masterfully conveys the tension between fear and freedom, resonating with anyone who's ever been caught at life's crossroads. \n\nTrack list \n1. Blurred Borders \n2. Inside the Margins \n3. Erased Traces \n4. Lost Between Roads \n5. Drawing in the Dark", image: 'album4.png' },
        { id: 19, name: 'Banquet Memory Album', price: '49.99', description: 'A nostalgic dive into fleeting moments and bittersweet celebrations, this album balances reflective ballads with explosive anthems. Its raw energy captures the highs and lows of shared experiences, leaving listeners both exhilarated and introspective. \n\nTrack List \n1. Fading Echoes \n2. Shattered Glass \n3. Golden Yesterday \n4. Reunion Fires \n5. Final Toast', image: 'album5.png' },
      ],
    shirts: [
        { id: 20, 
            name: 'Black Stage Fright Shirt', 
            price: '39.99', 
            description: "Made from soft, breathable cotton, this shirt offers all-day comfort. Perfect for casual wear, it feels gentle against the skin and keeps you cool in warmer weather.", 
            image: 'shirt1.png', 
            isMeasureable: true },
        { id: 21, 
            name: 'Red Stage Fright Shirt', 
            price: '49.99', 
            description: "Crafted from lightweight linen, this shirt exudes a relaxed, breezy elegance. Its natural texture and moisture-wicking properties make it ideal for warmer seasons.", image: 'shirt2.png' , isMeasureable: true},
        { id: 22, 
            name: 'These Whispers Black Shirt', 
            price: '48.99', 
            description: "Engineered with high-performance polyester, this shirt is lightweight and quick-drying. It’s ideal for active lifestyles and outdoor adventures, offering both durability and flexibility.", 
            image: 'shirt3.png', 
            isMeasureable: true },
        { id: 23, 
            name: 'These Whispers White Shirt', 
            price: '36.99', 
            description: "Crafted from soft chambray, this shirt balances casual style with sophistication. Its breathable fabric and subtle texture make it versatile for various occasions.", 
            image: 'shirt4-rem.png', 
            isMeasureable: true },
        { id: 24, 
            name: 'Steel and Shadows Graphic Shrirt', 
            price: '59.99', 
            description: "Featuring a soft, smooth modal blend, this shirt delivers exceptional comfort. Its silky feel and moisture-absorbing properties make it perfect for warm-weather wear.", 
            image: 'shirt5.png', 
            isMeasureable: true },
        { id: 25, 
            name: 'Room For House Vintage Shirt', 
            price: '49.99', 
            description: "Made from a breathable cotton-blend, this shirt offers the softness of cotton combined with enhanced durability and stretch for versatile everyday wear.", 
            image: 'shirt6.png', 
            isMeasureable: true },
        { id: 26, 
            name: 'Room For House Shirt', 
            price: '35.99', 
            description: "Crafted with a touch of Lycra for added stretch, this shirt provides comfort and flexibility. Perfect for both work and play, it moves with you while maintaining a sleek look.", 
            image: 'shirt7.png', 
            isMeasureable: true },
        { id: 27, 
            name: 'Steel and Shadows Shirt',
            price: '39.99', 
            description: "Featuring eco-friendly Tencel fabric, this shirt is soft, sustainable, and moisture-wicking. Its smooth finish and lightweight feel make it ideal for a more eco-conscious wardrobe.", 
            image: 'shirt8.png', 
            isMeasureable: true },
    ],
    caps: [
      { id: 28, name: 'Steel and Shadows Cap', price: '24.99', description: "Crafted from durable cotton twill, this cap offers a structured fit and timeless style. Perfect for casual outings, its embroidered logo adds a touch of elegance.", image: 'cap1.png' },
      { id: 29, name: 'Room For House Cap', price: '22.99', description: "Made with a soft cotton blend, this cap provides a relaxed fit and classic appeal. Its versatile design suits both casual and semi-formal attire.", image: 'cap3.png' },
      { id: 30, name: 'These Whispers Cap', price: '27.99', description: "Constructed from breathable performance fabric, this cap is ideal for active lifestyles. Its moisture-wicking properties and adjustable strap ensure a comfortable fit.", image: 'cap4-rem.png' },
      { id: 31, name: 'Stage Fright White Cap', price: '29.99', description: 'Featuring a suede-feel brim, this cap adds a touch of luxury to casual looks. Its soft, supple texture offers a sophisticated feel while maintaining durability.', image: 'cap2-rem.png' },
      { id: 32, name: 'Stage Fright Blue Cap', price: '29.99', description: 'This cap’s vibrant color and sleek design make it a standout accessory. Made from a lightweight, breathable material, it offers comfort and style for any outdoor activity.', image: 'cap5.png' },
    ],
    accessories: [
      { id: 34, name: 'Stage Fright Tumbler', price: '54.99', description: 'This tumbler is made from durable stainless steel, designed to keep beverages hot or cold for extended periods. Its double-wall insulation provides excellent temperature retention, while the sleek, rust-resistant exterior ensures long-lasting use and a modern, polished look.', image: 'WhiteTumbler.png' },
      { id: 35, name: 'Cotton Towel', price: '19.99', description: 'Made from 100% organic cotton, this towel offers plush softness and absorbency. Its eco-friendly production and minimalistic design make it a sustainable choice for everyday use.', image: 'BlueTowel.png' },
      { id: 37, name: 'Stainless Steel Bottle', price: '34.99', description: 'Designed for versatility, this stainless steel bottle features a wide mouth for easy filling and cleaning. Its double-wall insulation keeps drinks at the desired temperature for hours.', image: 'StainlessSteelBottle.png' },
      { id: 38, name: 'Alloy Metal Keychain', price: '14.99', description: "Made from durable alloy, this keychain combines style with functionality. Its compact design and secure clasp make it perfect for everyday use.", image: 'StarKeychain.png' },
      { id: 39, name: 'Stainless Steel Keychain', price: '16.99', description: "This sleek keychain features a brushed stainless steel finish for a modern look. Its sturdy build ensures longevity and practicality for daily use.", image: 'CircularKeychain.png' },
    ]
  };
  




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
      <div className="relative h-[400px] bg-pageBlack">
        <img
          src="merchHero.jpg"
          alt="Merch Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold font-metal"
          style={{ textShadow: "0 0 5px #001834, 0 0 10px #001834, 0 0 30px #7beaf0, 0 0 40px #7beaf0" }}>Merch Collection</h1>
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
      <div className="space-y-4 bg-pageBlack text-black">
        {/* Best Sellers */}
        <section id="bestSellers" className=" scroll-mt-24 text-white">
        <h2 className="text-7xl font-bold text-left text-pageBlack font-fancy mb-2 ml-[65px]">Best Sellers</h2>
          <h2 className="text-4xl font-bold text-left ml-[100px] text-white font-fancy mb-2"
          style={{ textShadow: "0 0 10px #04d9ff, 0 0 30px #04d9ff, 0 0 40px #04d9ff" }}>Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ml-[60px] mr-[60px]">
            {products.bestSellers.map((product) => (
              <div
                key={product.id}
                className=" p-4 shadow-lg cursor-pointer mb-[10px]"
                onClick={() => openModal(product)}
              >
                <img src={product.image} alt={product.name} className=" items-center mb-4 w-[370px] h-[360px] " />
                <p className="font-bold text-m text-left font-fancy ml-[65px]"
                style={{ textShadow: "0 0 3px #001834, 0 0 5px #001834, 0 0 10px #04d9ff, 0 0 20px #249ed6" }}>{product.name}</p>
                <p className="text-white text-left text-m font-quicksand ml-[65px]">${product.price}</p>
                
              </div>
            ))}
          </div>
          <div className=""></div> 
        </section>

        {/* Albums */}
        <section id="albums" className="scroll-mt-24 text-white">
          <h2 className="text-4xl font-bold text-left mb-2 text-white mt-[150px] font-fancy ml-[100px] "
          style={{ textShadow: "0 0 10px #04d9ff, 0 0 30px #04d9ff, 0 0 40px #04d9ff" }}>Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 ml-[60px] mr-[60px]">
            {products.albums.map((album) => (
              <div
                key={album.id}
                className=" p-4 shadow-lg cursor-pointer mb-[10px]"
                onClick={() => openModal(album)}
              >
                <img src={album.image} alt={album.name} className=" items-center  w-[340px] h-[230px]  mb-5" />
                <p className="font-bold text-m text-left font-fancy mt-[-40px] ml-[25px]"
                style={{ textShadow: "0 0 3px #001834, 0 0 5px #001834, 0 0 10px #04d9ff, 0 0 20px #249ed6" }}>{album.name}</p>
                <p className="text-white text-left text-m font-quicksand ml-[25px]" >${album.price}</p>
                
              </div>
            ))}
          </div>
          <div className=""></div> 
        </section>

        <div className="bg-gray-200 relative h-[500px]">
          <img src="clotheshero.png" alt="" className = "object-cover mt-[90px] w-full h-full "/>
        </div>

        {/* Hoodies */}
        <section id="hoodies" className="scroll-mt-24 text-white">
          <h2 className="text-4xl font-bold text-left ml-[100px] text-white mt-[150px] font-fancy mb-2"
          style={{ textShadow: "0 0 10px #04d9ff, 0 0 30px #04d9ff, 0 0 40px #04d9ff" }}>Hoodies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ml-[40px] mr-[40px]">
            {products.hoodies.map((hoodie) => (
              <div
                key={hoodie.id}
                className=" p-4 shadow-lg cursor-pointer mb-[10px]"
                onClick={() => openModal(hoodie)}
              >
                <img src={hoodie.image} alt={hoodie.name} className="items-center mb-4 w-[370px] h-[380px] " />
                <p className="font-bold text-m text-left font-fancy ml-[55px]"
                style={{ textShadow: "0 0 3px #001834, 0 0 5px #001834, 0 0 10px #04d9ff, 0 0 20px #249ed6" }}>{hoodie.name}</p>
                <p className="text-white text-left text-m font-quicksand ml-[55px]">${hoodie.price}</p>
                
              </div>
            ))}
          </div>
          <div className=""></div> 
        </section>

        {/* Shirts */}
        <section id="shirts" className="scroll-mt-24 text-white">
          <h2 className="text-4xl font-bold text-left text-white mt-[150px] font-fancy ml-[100px] mb-3"
          style={{ textShadow: "0 0 10px #04d9ff, 0 0 30px #04d9ff, 0 0 40px #04d9ff" }}>Shirts</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ml-[40px] mr-[40px] ">
            {products.shirts.map((shirt) => (
              <div
                key={shirt.id}
                className=" p-4 shadow-lg cursor-pointer mb-[10px]"
                onClick={() => openModal(shirt)}
              >
                <img src={shirt.image} alt={shirt.name} className="items-center mb-2 w-[370px] h-[380px]" />
                <p className="font-bold text-m text-left font-fancy ml-[55px]"
                style={{ textShadow: "0 0 3px #001834, 0 0 5px #001834, 0 0 10px #04d9ff, 0 0 20px #249ed6" }}>{shirt.name}</p>
                <p className="text-white text-left text-m font-quicksand ml-[55px]">${shirt.price}</p>
                
              </div>
            ))}
          </div>
          <div className=""></div> 
        </section>

        <div className="bg-gray-200 relative h-[400px]">
          <img src="caphero1.png" alt="" className = "object-cover mt-[90px] w-full h-full "/>
        </div>

        {/* Caps */}
        <section id="caps" className="scroll-mt-24 text-white">
          <h2 className="text-4xl font-bold text-left ml-[100px] text-white mt-[150px] font-fancy"
          style={{ textShadow: "0 0 10px #04d9ff, 0 0 30px #04d9ff, 0 0 40px #04d9ff" }}>Caps</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 ml-[40px] mr-[40px]">
            {products.caps.map((cap) => (
              <div
                key={cap.id}
                className=" p-4 shadow-lg cursor-pointer mb-[10px]"
                onClick={() => openModal(cap)}
              >
                <img src={cap.image} alt={cap.name} className="items-center mb-2 w-[370px] h-[280px] " />
                <p className="font-bold text-m text-left font-fancy ml-[35px]"
                style={{ textShadow: "0 0 3px #001834, 0 0 5px #001834, 0 0 10px #04d9ff, 0 0 20px #249ed6" }}>{cap.name}</p>
                <p className="text-white text-left text-m font-quicksand ml-[35px]">${cap.price}</p>
                
              </div>
            ))}
          </div>
          <div className=""></div> 
        </section>

        

      {/* accessories */}
      <section id="accessories" className="scroll-mt-24 text-white">
          <h2 className="text-4xl font-bold text-left ml-[100px] text-white mt-[150px] font-fancy"
          style={{ textShadow: "0 0 10px #04d9ff, 0 0 30px #04d9ff, 0 0 40px #04d9ff" }}>Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 ml-[40px] mr-[40px]">
            {products.accessories.map((accessory) => (
              <div
                key={accessory.id}
                className=" p-4 shadow-lg cursor-pointer mb-[10px]"
                onClick={() => openModal(accessory)}
              >
                <img src={accessory.image} alt={accessory.name} className="items-center mb-4 w-[370px] h-[330px] " />
                <p className="font-bold text-m text-left font-fancy ml-[35px]"
                style={{ textShadow: "0 0 3px #001834, 0 0 5px #001834, 0 0 10px #04d9ff, 0 0 20px #249ed6" }}>{accessory.name}</p>
                <p className="text-white text-left text-m font-quicksand ml-[35px]">${accessory.price}</p>
                
              </div>
            ))}
          </div>
          <div className=""></div> 
        </section>
      </div>

      {/* Product Modal */}
      <MerchPopup isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default Merch;
