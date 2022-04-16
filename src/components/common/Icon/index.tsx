import React from 'react';
import { StyledIconContainer } from './style';

/**
 * @description 아이콘 이미지를 위한 컴포넌트 입니다.
 * name 값을 @Asset 폴더로부터 컨벤션에 맞게 지정하여 사용합니다.
 */

export interface IIconProperties {
  name: string;
  size?: number;
  strokeWidth?: number;
  alt: string;
  rotate?: number;
  style?: React.CSSProperties;
}

const Icon = ({ name, alt, size = 28, rotate, style, ...props }: IIconProperties) => {
  // Asset 폴더에 정적 Image 파일을 저장하여 icon_${name} 방식으로 사용함.
  const iconUrl = require(`@assets/icons/icon-${name}.svg`);
  return (
    <StyledIconContainer size={size} rotate={rotate} style={style} {...props}>
      <img src={iconUrl} alt={alt} />
    </StyledIconContainer>
  );
};

export default Icon;
