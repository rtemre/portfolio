module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a', // sophisticated-black
        secondary: '#4a5568', // gray-600
        accent: '#3182ce', // blue-600
        background: '#ffffff', // white
        surface: '#f7fafc', // gray-50
        text: {
          primary: '#2d3748', // gray-800
          secondary: '#718096', // gray-500
        },
        success: '#38a169', // green-600
        warning: '#d69e2e', // yellow-600
        error: '#e53e3e', // red-600
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        display: ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        heading: ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        subheading: ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover':
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        300: '300ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
