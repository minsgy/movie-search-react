import React, { useState, useRef, memo } from 'react';
import { ChatFormWrapper, StyledInput, SearchBtn } from './style';
import Icon from '@components/common/Icon';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget.keyword;
    if (value === '') {
      return;
    }
    setSearchParams({ tab: 'search', q: value });
    if (inputRef.current) {
      // INPUT 값 초기화
      inputRef.current.value = '';
    }
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

  return (
    <ChatFormWrapper onSubmit={onSubmitSearch} className={isFocusInput ? 'focus' : ''}>
      <StyledInput
        name="keyword"
        ref={inputRef}
        type="text"
        onFocus={onFocusInput}
        onBlur={onFocusInput}
      />
      <SearchBtn type="submit">
        <Icon name="search" alt="영화 검색하기" size={20} />
      </SearchBtn>
    </ChatFormWrapper>
  );
};

export default memo(SearchForm);
