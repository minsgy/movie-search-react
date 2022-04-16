import styled, { css } from 'styled-components';
const StyledIconContainer = styled.i<{ size: number; rotate?: number }>`
  display: inline-block;
  ${(props) => {
    const { size, rotate } = props;
    return css`
      width: ${size}px;
      height: ${size}px;
      transform: ${rotate ? `rotate(${rotate}deg)` : ''};
    `;
  }}
`;

export { StyledIconContainer };
