import { Title, InnerContainer, HeaderContainer, Content } from './style';
import { useTab } from '@hooks';
import SearchForm from '@components/SearchForm';
import { useCallback } from 'react';

const Header = () => {
  const { title } = useTab(); // 현재 선택 된 Tab querystring 값
  const renderContent = useCallback(() => {
    switch (title) {
      case '검색':
        return <SearchForm />;
      case '즐겨찾기':
      default:
        return <Content>내 즐겨찾기</Content>;
    }
  }, [title]);

  return (
    <HeaderContainer>
      <InnerContainer>
        <Title>MINSGY CINEMA</Title>
        {renderContent()}
      </InnerContainer>
    </HeaderContainer>
  );
};

export default Header;
