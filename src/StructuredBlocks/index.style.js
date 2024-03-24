import { css } from "@emotion/react";

const cardWrapper = css`
  background-color: #f2f5fa;
  display: flex;
  flex-direction: row;
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const secondWrapper = css`
  display: flex;
  flex-direction: row;
  @media {
    flex-direction: column;
  }
`;

export { cardWrapper, secondWrapper };
