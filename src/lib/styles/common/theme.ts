import { DefaultTheme, css } from 'styled-components';

const common = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
} as const;

// 확장성을 고려한 테마 정의
const darkTheme: DefaultTheme = {
  color: {
    bgColor: '#333',
    textColor: '#ffffff',
    pointColor: '#d43919',
  } as const,
  common,
};

const theme = {
  dark: darkTheme,
};

export default theme;
