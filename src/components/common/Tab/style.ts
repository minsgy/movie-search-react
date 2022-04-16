import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TabContainer = styled.nav`
  display: flex;
  justify-content: center;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`;

const TabItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex: 1;
  height: 40px;
`;

const Title = styled.span`
  font-size: 14px;
  padding-bottom: 6px;
  font-weight: normal;
  &.active {
    border-bottom: 1px solid red;
  }
`;

export { TabContainer, TabItemContainer, Title };
