import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faSoundcloud, faItunes, faYoutube, faInstagram, faTiktok, faSnapchat, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const members = [
  { name: 'KAI "WOLF" TORRES', image: 'member4.png', position: 'Lead Vocals', abt: "Kai was a street musician, often performing in the subway tunnels, where he developed his gritty, soulful style. Growing up in foster care, Kai found a sense of family in the music community, and he wrote lyrics about survival and unity. His drumming style has become the signature of Stage Fright’s sound. The nickname 'Wolf' comes from his fierce loyalty to the band and fans, always saying, “This band is my pack, and I’ll defend it with everything I have.”" },
  { name: 'MAX "THUNDER" CRUZ', image: 'member5.png', position: 'Lead Guitar & Backing Vocals', abt: "Max grew up in a small industrial town where his father worked in a steel mill, and the heavy, rhythmic pounding of machinery became the soundtrack of his childhood. At 15, he found an old electric guitar in a pawn shop and taught himself by playing along with the sounds around him. Known for his intense, lightning-fast solos, Max believes that each note he plays is a way of breaking free from his gritty past." },
  { name: 'AXEL "ACE" RIVERS', image: 'member1.png', position: 'Bass Guitar', abt: "Ace Rivers grew up in a gritty industrial town, raised by hardworking parents who shaped his grounded, no-nonsense attitude. Now the backbone of his rock band, Ace keeps everyone grounded with his steady bass lines and calm presence. On stage, he’s a force of quiet intensity, clad in leather jackets and band tees. Ace is the band’s lyrical contributor, his confidence and laid-back humor making him a fan favorite." },
  { name: 'JESSE "JETT" BLAKE', image: 'member2.png', position: 'Rhythm Guitar', abt: "Raised in a musical family, Jesse 'Jett' Blake grew up immersed in rock, blues, and punk, developing a unique playing style. Jett’s harmonies add grit to the band’s sound, and his stage presence is electric—always bouncing, moving, and connecting with the crowd. His guitar is his pride, a battered yet beloved Les Paul covered in stickers from years on the road. Off stage, Jett is a joker and a storyteller, quick with a laugh, and his infectious energy keeps everyone around him fired up." },
  { name: 'JACKSON "BLAZE" REYES', image: 'member3.png', position: 'Drums', abt: "Jackson was once a motocross champion until a crash forced him out of the sport. During recovery, he discovered a passion for drumming—channeling the same adrenaline rush he used to find on the track, delivering high energy performances. His drumming is wild and explosive, like the revving of an engine, bringing an untamed, raw energy to Stage Fright’s live shows. The band started calling him Blaze because, as he says, 'I may not race anymore, but I still burn hot.'" },
];

const albums = [
  { name: 'Banquet Memory ', description: 'Banquet Memory is Stage Fright’s debut album, filled with nostalgic songs for both the band members and fans who relate to their childhood. Learn about the band members’ life stories, from the slowest to the most upbeat moments of their life, right here in this album. Banquet Memory not only represents all those moments that were worth cherishing with a photo but also the moments one might wish to forget. Banquet memory is not only the first album released by Stage Fright but also what gave them the inspiration to keep releasing songs that could reach thousands. ', trackList: "1. Fading Echoes \n2. Shattered Glass \n3. Golden Yesterday \n4. Reunion Fires \n5. Final Toast", image: 'banquet.png', shadowColor: "#f710bc" },
  { name: 'Room For House ', description: "Room for House is a high-octane blend of gritty rock anthems and soulful ballads that captures the raw energy of Stage Fright’s journey. The album’s title is a nod to their early days of cramped jam sessions where the band first found their sound. Featuring breakout tracks like Steel Strings and Pack Mentality, it showcases electrifying solos and howl-like vocals. From the driving rhythm of Blaze the Trail to the introspective Echoes in the Tunnel, the album reflects the band’s themes of resilience, unity, and freedom. Room for House quickly established Stage Fright as a rising force, earning them a loyal fanbase.", trackList: "1. Four Walls \n2. Basement Riot \n3. Static Nights \n4. Locked Doors \n5. House in Flames", image: 'house.png', shadowColor: "#39ff14" },
  { name: 'Steel & Shadows ', description: "Steel & Shadows represents the toughest, most mysterious part of a human being, the part about a person that no one knows about. The album delves into vulnerability and resilience, with tracks like Forged in Fire embodying the band’s signature blend of raw power and emotional intensity.  Max 'Thunder' Cruz’s blistering solos and Kai 'Wolf' Torres’ evocative lyrics shine throughout, weaving a narrative of strength in adversity. With its mix of thunderous anthems and brooding melodies, Steel & Shadows solidifies Stage Fright as masterful storytellers of the human experience.", trackList: "1. Forged in Fire \n2. Iron Will \n3. Blade's Reflection \n4. Shadow's End \n5. March of the Unbroken", image: 'steelshadows.png', shadowColor: "#8a00c4" },
  { name: 'Afraid of Lines ', description: "Afraid of Lines represents a different fear faced by the members. Explore the most irrational fears someone could have or even the smallest fear that might not seem like seem like a big deal. Learn about how these fears grow from the member’s personal experiences through it’s different tracks, filled with Blaze’s electrifying drumming solos and Jett’s strong background vocals. Afraid of Lines helps set the mood for a listener if they are ever feeling scare about a situation or stressed for something in the near future.", trackList: "1. Blurred Borders \n2. Inside the Margins \n3. Erased Traces \n4. Lost Between Roads \n5. Drawing in the Dark", image: 'lines.png', shadowColor: "#ffffff" },
  { name: 'These Whispers ', description: "These Whispers, Stage Fright's newest album, is about first love transitioning away from their childhood. Drawing from the band members’ personal stories, the album captures the excitement, longing, and bittersweet moments that come with young romance. Tracks like Electric Glances and Falling Into You deliver catchy, upbeat riffs that channel the exhilaration of new connections, while the ballad Echoes of Us explores love’s fragility. These Whispers resonates with a universality that reminds fans of the beauty and ache of love’s first spark.", trackList: "1. Silent Screams \n2. Midnight Echo \n3. Fading Footsteps \n4. Ghost in the Hall \n5. Vanishing Words", image: 'whispers.png', shadowColor: "#fcd12a" },
];

const HeroSection = () => (
  <div className="relative w-full h-[700px] bg-cover bg-center" style={{ backgroundImage: 'url("grouppic.png")' }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <h1 className="font-metal text-white text-8xl font-bold text-center" style={{ textShadow: "0 0 10px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000" }}>Experience Stage Fright</h1>
    </div>
  </div>
);

const SocialMediaIcons = () => (
  <div className="flex bg-pageBlack mt-4">
    <div className="flex space-x-4">
      {[faSpotify, faSoundcloud, faItunes, faYoutube, faInstagram, faTiktok, faSnapchat, faXTwitter].map((icon, index) => (
        <button
          key={index}
          className="rounded-full transition-all"
        >
          <FontAwesomeIcon icon={icon} className="hover:text-neonPink text-white text-lg" />
        </button>
      ))}
    </div>
  </div>
);


const BandFormationSection = () => (
  <section className="py-16 bg-pageBlack text-white">
    <div className="font-quicksand container mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="font-metal text-7xl font-bold mb-4 relative z-10 mt-[-100px]" style={{ textShadow: "0 0 10px #069494, 0 0 30px #069494, 0 0 40px #069494" }}>About The Band</h2>
          <SocialMediaIcons />
          <div className="text-lg flex gap-[50px] mt-8 ">
            <p>
              Stage Fright, a rock band formed by ALEX, ROBIN, JACK, HARVEY, and MIKE, quickly developed a unique sound combining <b>classic rock elements</b> with modern influences. Each member brought their distinct style and energy to the group, resulting in <b>powerful performances</b> that resonated with fans. Over time, their dynamic chemistry and shared vision for music solidified their position as a <b>rising force in the rock scene.</b> Stage Fright's powerful <b>live performances and memorable melodies</b> quickly gained them a loyal fanbase. Their music continues to evolve, blending diverse influences to create a sound that resonates deeply with listeners.
            </p>
            <p>
              Stage Fright's first <b>hit single</b>, Banquet Memories, marked a turning point in their career, showcasing their ability to craft emotionally charged rock anthems. With its <b>raw energy and catchy hooks</b>, the song quickly gained traction on streaming platforms and radio stations, earning them widespread recognition. The song’s success not only solidified their presence in the rock genre but also served as a catalyst for future releases, with fans eagerly anticipating each new release.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center bg-navRed p-8 rounded-lg shadow-md w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[260px]">
            <div className="w-40 h-40">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <h4 className="text-lg font-semibold text-white">{member.position}</h4>
              <p className="text-white">{member.abt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AlbumInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + albums.length) % albums.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % albums.length);

  return (
    <div className="bg-pageBlack py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Album Cover Carousel */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex-col">
            <h2 className="font-metal text-7xl font-bold mb-4 mr-[400px] z-10 mt-[-50px] text-white"
              style={{ textShadow: "0 0 5px #069494, 0 0 10px #069494, 0 0 20px #069494,0 0 30px #069494, 0 0 40px #069494" }}>
              Discography
            </h2>
            <h2 className="font-fancy text-2xl font-bold mb-4 relative z-10 text-white mr-[0px] mb-[40px] "
              style={{ textShadow: "0 0 10px #069494, 0 0 30px #069494" }}>
              Stage Fright's Greatest Hits
            </h2>

            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2} 
              loop={true} // Infinite loop
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[EffectCoverflow, Navigation, Pagination]}
              className="w-[200px] md:w-[500px] lg:w-[700px]"
            >
              {albums.map((album, index) => (
                <SwiperSlide key={index} className="relative">
                  <img
                    src={album.image}
                    alt={album.name}
                    className="border w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 space-x-8">
              <button className="prev-btn text-white p-4 rounded-full hover:text-gray-400 transition-all">
                <FontAwesomeIcon icon={faCaretLeft} className="text-4xl" />
              </button>
              <button className="next-btn text-white rounded-full hover:text-gray-400 transition-all">
                <FontAwesomeIcon icon={faCaretRight} className="text-4xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Album Description */}
        <div className="w-full md:w-1/2 pl-8 text-white mt-8 md:mt-0">
          <h2 className="font-fancy text-4xl font-bold mb-2 ml-[70px] mt-[-60px] text-center md:text-left"
            style={{ textShadow: `0 0 10px #fff, 0 0 30px ${albums[activeIndex].shadowColor}, 0 0 40px ${albums[activeIndex].shadowColor}` }}>
            {albums[activeIndex].name}
          </h2>
          <p className="text-lg ml-[70px] font-quicksand mr-[30px] text-center md:text-left">
            {albums[activeIndex].description}
          </p>
          <p className="text-lg font-bold ml-[70px] font-fancy mr-[30px] mt-[20px] mb-[10px] text-center md:text-left"
            style={{ textShadow: `0 0 10px #fff, 0 0 30px ${albums[activeIndex].shadowColor}, 0 0 40px ${albums[activeIndex].shadowColor}` }}>
            Track List:
          </p>
          <p className="text-lg whitespace-pre-line ml-[70px] font-quicksand mr-[30px] text-center md:text-left">
            {albums[activeIndex].trackList}
          </p>
        </div>
      </div>
    </div>
  );
};


const App = () => (
  <>
    <HeroSection />
    <BandFormationSection />
    <AlbumInfo />
  </>
);

export default App;
