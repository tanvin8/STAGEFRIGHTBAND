// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend:{
      colors:{
        navRed1: '#4b011d',
        navRed2: '#4b0101',
        navRed: '#3d0909',
        pageBlack: '#130007',
        navBlue: '#001B3A',
        neonBlue: '#7beaf0',
        neonPink: '#f710bc',
        neonPurple: '#452b7e',
        neonIndigo: '#3d31d5',
        pageTeal: '#069494'
      },
      animation:{
        scroll:'scroll 15s linear infinite',
      },
      keyframes:{
        scroll:{
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-106%)'},
        },
      },
      fontFamily: {
        metal: ['Metal Mania', 'serif'],  
        quicksand: ['Quicksand', 'sans-serif'],
        fancy1: ['Mrs Saint Delafield', 'serif'],
        fancy: ['Rock Salt', 'serif'],
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [],
};
