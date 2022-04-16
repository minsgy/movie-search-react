import Tab from '@components/common/Tab';
import { NavigationContainer, InnerContainer } from './style';
import { TAB_LIST } from '@constants/tab';

const Navigation = () => {
  return (
    <NavigationContainer>
      <InnerContainer>
        <Tab tabList={TAB_LIST} />
      </InnerContainer>
    </NavigationContainer>
  );
};

export default Navigation;
