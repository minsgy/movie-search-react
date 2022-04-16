import React from 'react';
import { StyledIcon } from './style';

/**
 * @description 로딩에 사용 할 Spinner 컴포넌트
 */

interface SpinnerProperties {
  size?: number;
  isLoading?: boolean;
}

const Spinner = ({ size = 16, isLoading = true }: SpinnerProperties) => {
  const sizeStyle = {
    width: size,
    height: size,
  };

  return isLoading ? (
    <StyledIcon>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke={'#fff'}
        style={sizeStyle}
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </StyledIcon>
  ) : null;
};

export default Spinner;
