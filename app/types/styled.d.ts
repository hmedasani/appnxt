import { Theme } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    label1: true;
    label2: true;
    subtitle: true;
    title: true;
  }
}
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
