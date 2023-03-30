import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-family: Inter, sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0 15px;
  height: 40px;
  border-radius: 8px;

  ${({ btnStyle }) => {
    if (btnStyle === "btn-md-green") {
      return css`
        width: 106px;
        background-color: var(--primary);
        color: #ffffff;
        :hover {
          background-color: var(--primary-50);
        }
      `;
    } else if (btnStyle === "btn-lg-gray") {
      return css`
        background-color: var(--gray20);
        color: var(--gray50);
        font-size: 16px;
        font-weight: 600;
        width: 90%;
        :hover {
          background-color: var(--gray50);
          color: var(--gray20);
        }
      `;
    } else if (btnStyle === "btn-sm-gray") {
      return css`
        display: flex;
        width: 61px;
        height: 20px;
        border-radius: 4px;
        background-color: var(--gray20);
        padding: 5px 10px;
        color: var(--gray50);
        :hover {
          background-color: var(--gray50);
          color: var(--gray20);
          border: 1px solid var(--gray20);
        }
      `;
    }
  }}

  transition: 1s;
`;
