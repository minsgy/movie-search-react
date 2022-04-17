import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TabContainer = styled.nav`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
`;

const TabItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 60px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.color.pointColor};
  border-bottom: none;

  &.active {
    background-color: ${({ theme }) => theme.color.pointColor};
  }
`;

const Title = styled.span`
  font-size: 0.6rem;
  margin-top: 6px;
  color: #fff;
  font-weight: normal;
`;

export { TabContainer, TabItemContainer, Title };
