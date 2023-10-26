/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "dark-prim": "#012F3B",
      "dark-sec": "#033D4B",
      "light-prim": "#F2EEE0",
      "color-accent": "#CA202F",
      "green-notif": "#034B47",
      "red-notif": "#4B0319",
      "innactif-bg": "#1D1D1D",
      "innactif-txt": "#383838",
      "cost-green": "#039124",
      black: "#000000",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        "Montserrat-Black": ["Montserrat-Black"],
        "Montserrat-Bold": ["Montserrat-Bold"],
        "Montserrat-Medium": ["Montserrat-Medium"],
        "Montserrat-Light": ["Montserrat-Light"],
        "Montserrat-ExtraBold": ["Montserrat-ExtraBold"],
        "Montserrat-Regular": ["Montserrat-Regular"],
        "Montserrat-SemiBold": ["Montserrat-SemiBold"],
        Zcool: ["Zcool"],
      },
    },
  },
  plugins: [],
};
