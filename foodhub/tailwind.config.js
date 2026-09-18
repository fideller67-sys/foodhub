/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F25C05',
          light: '#FF8A3D',
          hover: '#D95304',
          bg: '#FFF4ED',
        },
        secondary: '#1A1A1A',
        background: '#FAFAFA',
        surface: '#FFFFFF',
        text: {
          dark: '#121212',
          muted: '#666666',
        },
        border: '#EAEAEE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0,0,0,0.05)',
        md: '0 4px 12px rgba(0,0,0,0.08)',
        lg: '0 12px 32px rgba(0,0,0,0.12)',
        'primary-hover': '0 4px 12px rgba(242, 92, 5, 0.3)',
      },
    },
  },
  plugins: [],
}
