module.exports = {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '0.75rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '9rem',
        },
      },
      colors: {
        primary: '#0B8457',
        secondary: '#FFF76A',
        errorState: {
          red: '#FB4141',
          heavyRed: '#DE3939',
          lightRed: '#FF9292',
        },
        warningState: {
          yellow: '#F7CC74',
          heavyYellow: '#D2A549',
          lightYellow: '#FFE0A0',
        },
        successState: {
          green: '#2ECC71',
          heavyGreen: '#28B162',
          lightGreen: '#6FDB9D',
        },
        textColor: {
          black: '#404040',
          white: '#FFFFFF',
          darkGrey: '#A1A1A1',
          grey: '#C7C9D9',
          subtleGrey: '#F3F4F8',
        },
        background: {
          neutral: '#F6F9FF',
        },
        btnColor: {
          primaryDefault: '#0B8457',
          primaryHover: '#12704D',
          secondaryDefault: '#FFF76A',
          secondaryHover: '#DCD447',
        },
      },
      fontSize: {
        'display-1': ['3.625rem', {
          lineHeight: '4.938rem',
        }],
        'display-2': ['3rem', {
          lineHeight: '4.063rem',
        }],
        'heading-1': ['2.5rem', {
          lineHeight: '3.438rem',
        }],
        'heading-2': ['2.125rem', {
          lineHeight: '2.875rem',
        }],
        'heading-3': ['1.75rem', {
          lineHeight: '2.375rem',
        }],
        'heading-4': ['1.5rem', {
          lineHeight: '2.063rem',
        }],
        'heading-5': ['1.25rem', {
          lineHeight: '2rem',
        }],
        'heading-6': ['1rem', {
          lineHeight: '1.5rem',
        }],
        'paragraph-1': ['0.875rem', {
          lineHeight: '1.5rem',
        }],
        'paragraph-2': ['0.75rem', {
          lineHeight: '1.375rem',
        }],
        'paragraph-3': ['0.625rem', {
          lineHeight: '1.125rem',
        }],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
