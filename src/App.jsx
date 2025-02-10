import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar.jsx';
import GifDisplay from './components/GifDisplay.jsx';
import Slider from './components/Slider.jsx';
import Footer from './components/Footer.jsx';
import Countdown from './components/Countdown.jsx';
import './App.css';
import ScrollToTop from './components/ScrollToTop.jsx';
import Chat from './components/chat.jsx'

// pages
import About from './About.jsx';
import Tours from './Tours.jsx';
import Merch from './Merch.jsx';
import Contact from './Contact.jsx';
import Cart from './Cart.jsx';
import FrightClub from './components/FrightClub.jsx';

function App() {
 const sliderItems = [
  { id: 1, img: '/STAGEFRIGHTBAND/album3-rem.png', name: 'Albums', path: '/albums', src: 'These Whisphers Album' },
  { id: 2, img: '/STAGEFRIGHTBAND/hoodie3-rem.png', name: 'Hoodies', path: '/hoodies', src: 'These Whispers Blue Hoodie' },
  { id: 3, img: '/STAGEFRIGHTBAND/shirt4-rem.png', name: 'Shirts', path: '/shirts', src: 'These Whispers White Shirt' },
  { id: 4, img: '/STAGEFRIGHTBAND/cap2-rem.png', name: 'Caps', path: '/caps', src: 'White Skull Cap' },
  { id: 5, img: '/STAGEFRIGHTBAND/acc4-rem.png', name: 'Accessories', path: '/accessories', src: 'Stage Fright Metal Keychain' },
];


  return (
    <Router basename="/STAGEFRIGHTBAND">
      <ScrollToTop />
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <GifDisplay />
                <Slider items={sliderItems} />
                <Countdown />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/frightclub" element={<FrightClub />} />

          <Route path="/STAGEFRIGHTBAND/albums" element={<Merch />} />
          <Route path="/STAGEFRIGHTBAND/hoodies" element={<Merch />} />
          <Route path="/STAGEFRIGHTBAND/shirts" element={<Merch />} />
          <Route path="/STAGEFRIGHTBAND/caps" element={<Merch />} />
          <Route path="/STAGEFRIGHTBAND/accessories" element={<Merch />} />
          <Route
            path="*"
            element={
          <>
          <GifDisplay />
          <Slider items={sliderItems} />
          <Countdown />
        </>

            }
            />

        </Routes>
      </div>
      <Chat/>
      <Footer />
    </Router>
  );
}

export default App;
