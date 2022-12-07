import 'styled-components';
import { ThemeInterface } from './theme';

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
