import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 12px 40px -12px;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 40px 32px;
  text-align: center;
`;

const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export { ModalContainer, BackgroundDim };
