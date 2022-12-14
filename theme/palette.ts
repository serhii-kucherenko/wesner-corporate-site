import { PaletteOptions } from '@mui/material';
import {
  ERROR,
  GREY,
  INFO,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  TETRIARY,
  WARNING,
} from './constants/palette';

export const palette: PaletteOptions = {
  primary: { ...PRIMARY, contrastText: GREY[300] },
  secondary: {
    ...SECONDARY,
    contrastText: GREY[900],
  },
  tetriary: {
    ...TETRIARY,
    contrastText: GREY[900],
  },
  info: {
    ...INFO,
    contrastText: GREY[300],
  },
  warning: {
    ...WARNING,
    contrastText: GREY[300],
  },
  error: {
    ...ERROR,
    contrastText: GREY[300],
  },
  success: {
    ...SUCCESS,
    contrastText: GREY[300],
  },
  grey: { ...GREY },
  divider: GREY[100],
  background: {
    paper: '#fff',
    default: '#fff',
    darken: 'rgba(64, 84, 215, 0.04)',
    lighten: GREY[100],
  },
  text: {
    primary: GREY[900],
    secondary: GREY[800],
    disabled: GREY[500],
  },
};
