import styled from 'styled-components';
import SplashImage from '@assets/images/image-splash.jpg';
import { HEADER_HEIGHT, GRID_PADDING, CONTAINER_WIDTH } from '@constants/size';

const StyledLayout = styled.main`
  padding: ${HEADER_HEIGHT}px ${GRID_PADDING}px 0;
  min-height: 100%;
  /* background-color: #e4e4e4; */
  background-image: url(${SplashImage});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const StyledInnerContainer = styled.div`
  max-width: ${CONTAINER_WIDTH}px;
  margin: 0 auto;
`;

export { StyledLayout, StyledInnerContainer };
