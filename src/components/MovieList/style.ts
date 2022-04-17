import { CONTAINER_WIDTH, GNB_HEIGHT } from '@constants/size';
import styled from 'styled-components';

const MovieListContainer = styled.ul`
  ${({ theme }) => theme.common.flexColumn}
  max-width: ${CONTAINER_WIDTH}px;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Notice = styled.li`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  height: 50vh;
  font-size: 1.2rem;
`;

const ObserverBox = styled.div`
  width: 100%;
  height: ${GNB_HEIGHT}px;
`;

export { MovieListContainer, ObserverBox, Notice };
