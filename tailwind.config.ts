import type { Config } from "tailwindcss";
 

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-Libre_Bodoni)'],
  			mono: ['var(--font-Nunito_Sans)']
  		},
  		colors: {
  			mybrown: '#A29875',
  			mywhite: '#FFFFFF',
  			mygray: '#6C757D',
  			mytextbrown: '#787054',
  			mylightgray: '#F8F8F8',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
