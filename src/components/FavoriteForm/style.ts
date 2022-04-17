import styled from 'styled-components';
// import ANIMATION from '@lib/styles/common/animation';
const FormContainer = styled.div`
  color: ${({ theme }) => theme.color.bgColor};
`;

const MovieTitle = styled.strong`
  font-size: 1.2rem;
  font-weight: bold;
`;

const BtnContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  margin-top: 20px;
`;

const StyledBtn = styled.button`
  color: ${({ theme }) => theme.color.textColor};
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  height: 40px;
  flex: 1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
  &:hover {
    transform: scale(1.1);
  }

  &.favorite {
    background-color: ${({ theme }) => theme.color.pointColor};
  }
  &.cancel {
    background-color: ${({ theme }) => theme.color.bgColor};
  }
`;

const DescFavorite = styled.p`
  margin-top: 8px;
  font-size: 0.8em;
`;

export { FormContainer, BtnContainer, MovieTitle, StyledBtn, DescFavorite };
