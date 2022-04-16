import styled, { css } from 'styled-components';
import { IImageProperties } from './index';

const StyledImage = styled.img<IImageProperties>`
  max-width: 100%;
  max-height: 100%;
  ${(props) => {
    const { width, height, mode, block } = props;
    return css`
      width: ${width}px;
      height: ${height}px;
      object-fit: ${mode};
      display: ${block ? 'block' : 'inline-block'};
    `;
  }}
  vertical-align: top;
`;

export { StyledImage };
