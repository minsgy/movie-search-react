import { TAB_LIST } from '@constants/tab';
import { TAB_ID } from '@constants/queryString';
import { ITab } from '@interfaces/tab';
import { useMemo } from 'react';
import useQueryString from './useQueryString';

/**
 *  @description 현재 선택된 Tab의 title과 path를 반환한다.
 *  @returns { title, path } = 현재 있는 Tab 정보
 *  @example
 *  const { title, path } = useTab();
 */

const useTab = (): ITab => {
  const currentTabPath = useQueryString(TAB_ID);
  const currentTab = useMemo(() => {
    const currentTab = TAB_LIST.find((tab) => tab.path === currentTabPath); // 현재 선택 된 Tab 반환
    return currentTab ? currentTab : TAB_LIST[0]; // 선택되지 않은 Tab일 경우, 가장 첫 번째 Tab 선택
  }, [currentTabPath]); // Memo로 선택 된 Tab querystring 값이 변경되면 함수 실행
  return { ...currentTab };
};

export default useTab;
