import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth?: string;

    color: {
      main: string;
      bubble: string;
      text: string;
      content: string;
      button?: string;
      background?: string;
    };
  }
}
