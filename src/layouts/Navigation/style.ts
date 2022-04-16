import { CONTAINER_WIDTH } from '@constants/size';
import styled from 'styled-components';
const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.color.bgColor};
`;

const InnerContainer = styled.div`
  max-width: ${CONTAINER_WIDTH}px;
  margin: 0 auto;
`;

export { NavigationContainer, InnerContainer };
