import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { StyledImage } from './style';
import PlaceHolderImage from '@assets/images/image-placeholder.png';

export interface IImageProperties {
  ref?: React.RefObject<HTMLImageElement>;
  lazy?: boolean;
  threshold?: number;
  src?: string;
  placeholder?: string;
  alt: string;
  width?: number;
  height?: number;
  block?: boolean;
  mode?: 'contain' | 'cover' | 'fill';
  style?: React.CSSProperties;
}

/**
 * @description Image 컴포넌트 ( Lazy 로딩 적용 가능)
 */

// 모듈 내에서 한번 선언 한 후, 계속 사용하기 위해서 전역으로 Observer를 선언한다.
// https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
let observer: IntersectionObserver | null = null;

// CUSTOM EVENT TYPE
const LOAD_IMG_EVENT_TYPE = 'loadImage';

// Custom Event 생성
// https://developer.mozilla.org/ko/docs/Web/API/CustomEvent/CustomEvent
const onIntersection: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // IntersectionObserver가 인식한 이미지가 보여지는 영역에 들어왔을 때,
      observer.unobserve(entry.target); // 기존 element observe를 해제한다.
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE)); // 커스텀 이벤트를 호출한다.
    }
  });
};

const Image = ({
  lazy,
  threshold = 0.5,
  src,
  placeholder = PlaceHolderImage,
  alt,
  width,
  height,
  mode,
  block,
  style,
  ...props
}: IImageProperties) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      // Lazy가 false라면, 바로 로딩 시작.
      setIsLoaded(true);
      return;
    }
    // 만약 Lazy가 true라면, IntersectionObserver를 사용하여 로딩 시작.
    const handleLoadImage = () => setIsLoaded(true);
    const imgElement = imgRef.current;

    // imgElement가 지정되었다면, 로딩 이벤트를 적용
    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    return () => {
      imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;
    if (!observer) {
      // observer가 없다면 새로 만든다.
      observer = new IntersectionObserver(onIntersection, { threshold });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <StyledImage
      ref={imgRef}
      alt={alt}
      src={isLoaded ? src : placeholder}
      width={width}
      height={height}
      mode={mode}
      block={block}
      style={style}
      {...props}
    />
  );
};

export default Image;
