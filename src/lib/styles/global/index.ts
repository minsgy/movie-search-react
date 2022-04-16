import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset}

    html, 
    body,
    #root {
        font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        color: ${({ theme }) => theme.color.textColor};
        height: 100%;
    }
    *{
        box-sizing: border-box;
    }
    a,
    a:link,
    a:visited,
    a:hover{
        text-decoration: none;
        color: inherit;
    }

    li, ul, ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    input{
        padding: 0;
    }
    button {
        border: none;
        padding: 0;
    }
`;

export default globalStyle;
