import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset}

    html, 
    body {
        font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
        font-size: 14px;
        font-weight: 500;
        background-color: white;
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
    input{
        padding: 0;
    }
`;

export default globalStyle;
