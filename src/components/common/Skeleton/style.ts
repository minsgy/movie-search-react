import styled from 'styled-components';
import ANIMATION from '@lib/styles/animation';
const Base = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-image: linear-gradient(90deg, #dfe3e8 0px, #efefef 40px, #dfe3e8 80px);
  background-size: 200% 100%;
  background-position: 0 center;
  animation: ${ANIMATION.SKELETON_ZOOM_IN} 0.2s ease-out,
    ${ANIMATION.SKELETON_LOADING} 2s infinite linear;
`;

export { Base };
