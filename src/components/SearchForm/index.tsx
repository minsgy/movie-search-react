import { useState, memo } from 'react';
import { ChatFormWrapper, StyledInput, SearchBtn } from './style';
import { useKey } from '@hooks';
import Icon from '@components/common/Icon';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>('');
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const onClickSearch = () => {
    if (keyword === '') {
      return;
    }
    setSearchParams({ tab: 'search', q: keyword });
    setKeyword(''); // 검색 창 데이터 초기화
  };

  const onFocusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const { type } = e;
    // type별 포커스 이벤트를 다르게 처리한다.
    switch (type) {
      case 'focus':
        setIsFocusInput(true);
        break;
      case 'blur':
        setIsFocusInput(false);
        break;
      default:
        break;
    }
  };

  useKey('keydown', 'Enter', onClickSearch); // 전역 윈도우에서 Enter key 입력시 검색 실행

  return (
    <ChatFormWrapper className={isFocusInput ? 'focus' : ''}>
      <StyledInput
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        onFocus={onFocusInput}
        onBlur={onFocusInput}
      />
      <SearchBtn onClick={onClickSearch}>
        <Icon name="search" alt="영화 검색하기" size={20} />
      </SearchBtn>
    </ChatFormWrapper>
  );
};

export default memo(SearchForm);
