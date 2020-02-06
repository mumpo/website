import { Theme } from '../components/ThemeProvider';

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
