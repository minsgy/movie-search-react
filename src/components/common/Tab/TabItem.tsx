import { TabItemContainer, Title } from './style';
import { isPath } from '@lib/utils/validateFunc';
import { tabUrlFormat } from '@lib/utils/formatFunction';
import { useTab } from '@hooks';
import { useMemo } from 'react';
import Icon from '../Icon';

export interface ITabItemProperties {
  icon: string;
  title: string;
  path: string;
}

const TabItem = ({ icon, title, path, ...props }: ITabItemProperties) => {
  const currentTab = useTab(); // 현재 선택 된 Tab querystring 값
  const isActive = useMemo(() => currentTab?.path === path, [currentTab, path]); // 현재 선택 된 Tab querystring 값
  // 현재 선택 된 Tab과 Tab Path가 같을 경우 active 다중 클래스 적용

  return (
    <TabItemContainer
      className={isActive ? 'active' : ''}
      to={isPath(path) ? tabUrlFormat(path) : ''}
      {...props}
    >
      <Icon size={18} name={icon} alt={`${title}탭`} />
      <Title className={isActive ? 'active' : ''}>{title}</Title>
    </TabItemContainer>
  );
};

export default TabItem;
