// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
        
//       },
//       animation: {
//         slideLeft: "slideLeft 1s ease-out",
//         fadeIn: "fadeIn 1s ease-out",
//       },
//       keyframes: {
//         slideLeft: {
//           "0%": { transform: "translateX(-100%)" },
//           "100%": { transform: "translateX(0)" },
//         },
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//     },
//   },
//   plugins: [],
// };
// export default config;



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideLeft: "slideLeft 1s ease-out",
        fadeIn: "fadeIn 1s ease-out",
        slideRight:"slideRight 1s ease-out",
        slideTop: "slideTop 1s ease-out",
        slideBottom: "slideBottom 1s ease-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideBottom: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
