import { useCallback, useEffect } from 'react';

/**
 *  @description window 전역으로 사용하기 위한 key event 생성
 *  @param {string} event - 이벤트 타입 (keydown, keyup, ...)
 *  @param {string} targetKey - 이벤트 대상 키 (Enter, ...)
 *  @param {() => void} handler - 이벤트 핸들러
 *  @returns None
 *  @example useKey('keydown', 'Enter', () => { alert('Enter key down'); } );
 */

const useKey = (event: string, targetKey: string, handler: () => void) => {
  // 이벤트 핸들러를 저장하는 함수
  // 이벤트 객체 Key = 이벤트 대상 키 일 경우, 받아온 handler 실행
  const handleKey = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        handler();
      }
    },
    [targetKey, handler],
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);
    return () => {
      window.removeEventListener(event, handleKey);
    };
  }, [event, targetKey, handleKey]);
};

export default useKey;
