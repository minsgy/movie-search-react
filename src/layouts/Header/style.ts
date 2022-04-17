import styled from 'styled-components';
import { CONTAINER_WIDTH, HEADER_HEIGHT, GRID_PADDING } from '@constants/size';
const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  height: ${HEADER_HEIGHT}px;
  z-index: 5;
  padding: 0 ${GRID_PADDING}px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: ${CONTAINER_WIDTH}px;
  height: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  flex: 1;
  text-align: right;
`;

const Title = styled.h1`
  display: flex;
  font-family: 'Anton', sans-serif;
  font-size: 1.2rem;
`;

export { Title, InnerContainer, HeaderContainer, Content };
