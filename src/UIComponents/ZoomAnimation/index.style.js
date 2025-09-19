import { css, keyframes } from "@emotion/react";

const wrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 375px;
  background-color: rgb(255, 255, 255);
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.3rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0.5rem 1rem;
  padding: 15px;
  max-width: 470px;
  font-size: 16px;
  // height: fit-content;
  flex: 0 1 0%;
`;

const scale = keyframes`
  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const heading = css`
  display: flex;
  flex-direction: row;
  align-items: end;
  font-weight: bold;
  font-style: italic;
  transform: scale(0.94);
  animation: ${scale} 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
  }

  span:nth-child(1) {
    animation: ${fadeIn} 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(2) {
    animation: ${fadeIn} 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(3) {
    animation: ${fadeIn} 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
`;

export { wrapper, heading };
