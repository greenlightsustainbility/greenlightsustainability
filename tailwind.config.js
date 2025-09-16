module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Growth authority, environmental trust
        primary: {
          50: "#E8F5F0", // custom-green-50
          100: "#C6E9DA", // custom-green-100
          200: "#9DDCC0", // custom-green-200
          300: "#74CFA6", // custom-green-300
          400: "#4BC28C", // custom-green-400
          500: "#22B572", // custom-green-500
          600: "#1A9B5E", // custom-green-600
          700: "#0B6E4F", // custom-green-700
          800: "#085A40", // custom-green-800
          900: "#064631", // custom-green-900
          DEFAULT: "#0B6E4F", // custom-green-700
        },
        // Secondary Colors - Corporate reliability, professional depth
        secondary: {
          50: "#E7F1F8", // custom-blue-50
          100: "#C4DCF0", // custom-blue-100
          200: "#9BC7E7", // custom-blue-200
          300: "#72B2DE", // custom-blue-300
          400: "#499DD5", // custom-blue-400
          500: "#2088CC", // custom-blue-500
          600: "#1A73B3", // custom-blue-600
          700: "#0F4C81", // custom-blue-700
          800: "#0C3E6A", // custom-blue-800
          900: "#093053", // custom-blue-900
          DEFAULT: "#0F4C81", // custom-blue-700
        },
        // Accent Colors - Action moments, opportunity signals
        accent: {
          50: "#FEF7E6", // custom-amber-50
          100: "#FDECC0", // custom-amber-100
          200: "#FCE199", // custom-amber-200
          300: "#FBD672", // custom-amber-300
          400: "#FACB4B", // custom-amber-400
          500: "#F5A623", // custom-amber-500
          600: "#E6951F", // custom-amber-600
          700: "#D7841B", // custom-amber-700
          800: "#C87317", // custom-amber-800
          900: "#B96213", // custom-amber-900
          DEFAULT: "#F5A623", // custom-amber-500
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F7F8F9", // gray-50
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900
          secondary: "#6B7280", // gray-500
        },
        // Status Colors
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
        // Border Colors
        border: "#E5E7EB", // gray-200
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}