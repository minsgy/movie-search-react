import { keyframes } from 'styled-components';

const ANIMATION = {
  SKELETON_ZOOM_IN: keyframes`
		0% {
		  opacity: 0;
		  transform: scale(0.95);
		}
		100% {
		  opacity: 1;
		  transform: scale(1);
		}
	  `,
  SKELETON_LOADING: keyframes`
	0% {
		  background-position-x: 100%;
		}
		50% {
		  background-position-x: -100%;
		}
		100% {
		  background-position-x: -100%;
		}
	`,
} as const;

export default ANIMATION;
