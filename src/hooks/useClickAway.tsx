import { useEffect, useRef } from 'react';

/**
 *  @description 지정한 요소 이 외의 mouse/touch Event를 발생시키는 함수
 *  @param {() => void} handler - 발생 시킬 이벤트 핸들러
 *  @returns {React.RefObject<HTMLDivElement>} - 이벤트 발생 참조 값
 *  @example const Modal = useClickAway(() => { alert('click away'); } );
 */

type UseClickAwayProperties = () => void;

const useClickAway = (handler: UseClickAwayProperties) => {
  const ref = useRef<HTMLDivElement>(null);
  const savedHandler = useRef<UseClickAwayProperties>(handler);
  // @NOTE: (최적화) Handler가 교체 될 경우에, event가 제거되고 다시 정의가 되는 걸 방지해줌

  useEffect(() => {
    savedHandler.current = handler; // Event는 유지하며 Handler 교체
  }, [handler]);

  useEffect(() => {
    const element = ref.current; // 이벤트 발생 요소 참조
    if (!element) {
      // 이벤트 발생 요소가 없을 경우, 종료
      return;
    }

    const handleEvent = (event: MouseEvent | TouchEvent) => {
      // 이벤트 발생 시, 이벤트 핸들러 실행
      !element.contains(event.target as Node) && savedHandler.current();
    };

    document.addEventListener('mousedown', handleEvent); // PC Mouse Event 발생 시, 이벤트 핸들러 실행
    document.addEventListener('touchstart', handleEvent); // Mobile Touch Event 발생 시, 이벤트 핸들러 실행

    return () => {
      // 종료 시, 이벤트 제거
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
