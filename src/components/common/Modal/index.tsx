import { useEffect, useMemo } from 'react';
import { ModalContainer, BackgroundDim } from './style';
import ReactDOM from 'react-dom';
import { useClickAway } from '@hooks';

interface IModalProperties {
  children: React.ReactNode;
  width?: number;
  visible: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}

const Modal = ({
  children,
  width,
  visible = false,
  onClose,
  style,
  ...props
}: IModalProperties) => {
  const ref = useClickAway(() => {
    onClose && onClose();
  });
  const containerStyle = useMemo(
    () => ({
      width,
    }),
    [width],
  );

  // 가변 될 일 없는 결과이기 때문에 useMemo로 반환 값 최적화
  // Modal 컴포넌트를 대입 할 DOM을 반환하는 함수
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    // Modal 컴포넌트를 body 최상위에 붙이기 위해서 body.appendChild 사용
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [element]);

  // React Portal을 활용하여 생성 된 임의 DOM에 대입
  // - 사이드 이펙트 방지를 위해서 가장 바깥쪽에 둔다.
  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? 'block' : 'none' }}>
      <ModalContainer ref={ref} {...props} style={{ ...style, ...containerStyle }}>
        {children}
      </ModalContainer>
    </BackgroundDim>,
    element,
  );
};

export default Modal;
