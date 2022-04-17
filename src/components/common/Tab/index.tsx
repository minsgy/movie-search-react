import TabItem, { ITabItemProperties } from './TabItem';
import { useMemo } from 'react';
import { TabContainer } from './style';

export interface ITabProperties {
  tabList: Array<ITabItemProperties>;
}

const Tab = ({ tabList, ...props }: ITabProperties) => {
  const renderTabItems = useMemo(
    () =>
      tabList.map((item, index) => (
        <TabItem key={index} icon={item.icon} title={item.title} path={item.path} />
      )),
    [tabList],
  );

  return <TabContainer {...props}>{renderTabItems}</TabContainer>;
};

export default Tab;
