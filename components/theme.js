import base from '@rebass/preset'
import { merge } from 'lodash'

export const breakpoints = [32, 48, 64].map(w => `${w}em`)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128]

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  // brand
  primary: '#007a87',
  primaryWash: '#bfe6ea',
  primaryWashLight: '#dffbfd',
  primaryLight: '#009aab',
  primaryDark: '#004f58',
  alt: '#ff5a5f',
  altLight: '#ff7e82',
  altDark: '#e00007',
  success: '#3fb34f',
  error: '#b23f42',
  warm: '#ffb400',
  warmWash: '#ffdc89',
  cool: '#00bdde',
  coolWash: '#7cecff'
}

const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'light',
  colors: {
    ...palette,
    text: palette.black,
    background: palette.snow,
    elevated: palette.white,
    muted: palette.muted,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        elevated: palette.darkless,
        muted: palette.muted
      }
    }
  },
  fonts: {
    heading: '"Gotham Rounded SSm A","Gotham Rounded SSm B",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
    body: 'Sentinel,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    body: 'normal',
    bold: 'bold'
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.05em'
  },
  sizes: {
    container: 768,
    wide: 1080
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    sheet: '0 8px 32px rgba(0, 0, 0, 0.0625)'
  },
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 3
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    card: {
      bg: 'elevated',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card'
    },
    sheet: {
      bg: 'elevated',
      borderRadius: 'extra',
      boxShadow: 'sheet',
      overflow: 'hidden'
    },
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  styles: {
    a: {
      color: 'primary',
      cursor: 'pointer',
      ':hover, :focus': {
        color: 'secondary'
      }
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'heading'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    navitem: {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'inherit',
      textDecoration: 'none',
      fontFamily: 'heading',
      fontWeight: 'bold',
      ':hover,:focus': {
        color: 'primary'
      }
    }
  }
})

export default theme
