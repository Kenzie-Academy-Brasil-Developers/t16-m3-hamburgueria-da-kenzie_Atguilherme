import styled from "styled-components";

export const StyledCartList = styled.aside`
  display: flex;
  align-self: center;
  width: 90%;
  height: 535px;
  background-color: var(--gray0);

  .cart__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid var(--gray0);
    border-radius: 8px;
  }

  .cart__header {
    border: 1px solid var(--gray0);
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    width: 100%;
    height: 65px;
    background-color: var(--primary);
    color: #ffffff;
  }

  .cart__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px;
  }

  .cart__item {
    display: flex;
    flex-direction: row;
    width: 90%;
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
    background-color: var(--gray4);
    padding: 10px 20px;
    width: 65%;
  }

  .cart__buttonContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background-color: var(--gray4);
  }

  .cart__totalContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid transparent;
    border-top-color: var(--gray20);
  }

  .cart__totalData {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 10px 0 30px 0;
  }

  @media (min-width: 769px) {
    align-self: flex-start;
    min-width: 315px;
    width: 30%;
    margin-top: 20px;
  }
`;
