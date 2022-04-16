import { TAB_LIST } from '@constants/tab';
import { TAB_ID } from '@constants/queryString';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

// useTab
// 현재 선택된 Tab을 가져오는 Hook
//  현재 선택 된 Tab querystring 값을 반환한다.
const useTab = () => {
  const [searchParams] = useSearchParams(); // 현재 선택 된 URL querystring 값
  const currentTabPath = searchParams.get(TAB_ID); // Tab에 해당되는 querystring 값
  const currentTab = useMemo(() => {
    const currentTab = TAB_LIST.find((tab) => tab.path === currentTabPath); // 현재 선택 된 Tab 반환
    return currentTab ? currentTab : TAB_LIST[0]; // 선택되지 않은 Tab일 경우, 가장 첫 번째 Tab 선택
  }, [currentTabPath]); // Memo로 선택 된 Tab querystring 값이 변경되면 함수 실행
  return { ...currentTab };
};

export default useTab;
