import { Title, InnerContainer, HeaderContainer, Content } from './style';
import { useTab } from '@hooks';
import SearchForm from '@components/SearchForm';

const Header = () => {
  const { title } = useTab(); // 현재 선택 된 Tab querystring 값
  const renderContent = () => {
    switch (title) {
      case '검색':
        return <SearchForm />;
      default:
        return <Content>내 즐겨찾기</Content>;
    }
  };

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
