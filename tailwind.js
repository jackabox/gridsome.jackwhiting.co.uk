let colors = {
  transparent: 'transparent',

  black: '#000000',
  white: '#ffffff',
  'grey-darker': '#555555',
  grey: '#9e9e9e',

  'pink-darker': '#ffa3b4',
  pink: '#ffc8d2',
  'pink-lighter': '#f8f0f0'
}

module.exports = {
  colors: colors,

  screens: {
    sm: '360px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1600px'
  },

  fonts: {
    sans: [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ],
    serif: [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif'
    ],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace'
    ]
  },

  textSizes: {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem' // 48px,
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 1.75
  },

  tracking: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em'
  },

  textColors: colors,

  backgroundColors: colors,

  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain'
  },

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  },

  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

  borderRadius: {
    none: '0',
    sm: '.125rem',
    default: '.25rem',
    full: '9999px'
  },

  width: {
    auto: 'auto',
    px: '1px',
    '1/12': '8.3333333%',
    '2/12': '16.66667%',
    '3/12': '25%',
    '4/12': '33.33333%',
    '5/12': '41.6666667%',
    '6/12': '50%',
    '7/12': '58.3333333%',
    '8/12': '66.6666667%',
    '9/12': '75%',
    '10/12': '83.3333333%',
    '11/12': '91.6666667%',
    '12/12': '100%',
    screen: '100vw'
  },

  height: {
    auto: 'auto',
    px: '1px',
    full: '100%',
    screen: '100vh'
  },

  minWidth: {
    '0': '0',
    '1/12': '8.3333333%',
    '2/12': '16.66667%',
    '3/12': '25%',
    '4/12': '33.33333%',
    '5/12': '41.6666667%',
    '6/12': '50%',
    '7/12': '58.3333333%',
    '8/12': '66.6666667%',
    '9/12': '75%',
    '10/12': '83.3333333%',
    '11/12': '91.6666667%',
    '12/12': '100%'
  },

  minHeight: {
    '0': '0',
    full: '100%',
    screen: '100vh'
  },

  maxWidth: {},

  maxHeight: {
    full: '100%',
    screen: '100vh'
  },

  padding: {
    '0': '0',
    '1': '5px',
    '2': '10px',
    '3': '15px',
    '4': '20px',
    '5': '25px',
    '6': '30px',
    '7': '35px',
    '8': '40px',
    '9': '45px',
    '10': '50px',
    '30': '150px',
    '40': '200px'
  },

  margin: {
    auto: 'auto',
    '0': '0',
    '1': '5px',
    '2': '10px',
    '3': '15px',
    '4': '20px',
    '5': '25px',
    '6': '30px',
    '7': '35px',
    '8': '40px',
    '9': '45px',
    '10': '50px',
    '20': '100px'
  },

  negativeMargin: {
    '0': '0',
    '1': '5px',
    '2': '10px',
    '3': '15px',
    '4': '20px',
    '5': '25px',
    '6': '30px',
    '7': '35px',
    '8': '40px',
    '9': '45px',
    '10': '50px'
  },

  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    none: 'none'
  },

  zIndex: {
    auto: 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50
  },

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1'
  },

  svgFill: {
    current: 'currentColor'
  },

  svgStroke: {
    current: 'currentColor'
  },

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive']
  },

  plugins: [
    // require('tailwindcss/plugins/container')({
    //     center: true,
    //     padding: '15px'
    // })
  ],

  options: {
    prefix: '',
    important: false,
    separator: ':'
  }
}
