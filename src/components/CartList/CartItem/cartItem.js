import styled from "styled-components";

export const StyledItem = styled.li`
  .cart__item {
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 5px 0;
  }

  .cart__imgContainer {
    background-color: var(--gray20);
    border-radius: 4px;
  }

  .cart__imgContainer > img {
    width: 70px;
    height: 70px;
    object-fit: scale-down;
  }

  .cart__produtData {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 150px;
    background-color: var(--gray4);
    padding: 10px 0 0 10px;
  }

  .cart__buttonContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0 10px 20px;
    background-color: var(--gray4);
  }
`;
