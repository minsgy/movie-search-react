import styled from 'styled-components';

const ChatFormWrapper = styled.div`
  display: flex;
  border: 2px solid rgb(115, 0, 0);
  background-color: transparent;
  color: ${({ theme }) => theme.color.textColor};
  padding: 4px 6px;
  border-radius: 4px;
  &.focus {
    border: 2px solid ${({ theme }) => theme.color.textColor};
  }
  /* Header Item 설정 */
  flex: 1;
  margin-left: 14px;
`;

const StyledInput = styled.input`
  color: ${({ theme }) => theme.color.textColor};
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  flex: 1;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin-left: 6px;
`;

export { ChatFormWrapper, StyledInput, SearchBtn };
