import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      textColor: string;
      bgColor: string;
      pointColor: string;
    };
    common: {
      flexCenter: ThemedCssFunction;
      flexColumn: ThemedCssFunction;
    };
  }
}
