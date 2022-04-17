import styled from 'styled-components';
import { Base } from './style';
import { GNB_HEIGHT, GRID_PADDING } from '@constants/size';
const MovieItem = styled(Base)`
  width: 100%;
  height: 200px;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: ${GNB_HEIGHT + GRID_PADDING}px;
  }
  border-radius: 6px;
`;

export default MovieItem;
