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

  .bag__text {
    font-size: 18px;
    font-weight: 700;
    color: #000000;
  }

  .bag__addItens {
    font-size: 14px;
    font-weight: 400;
    color: #828282;
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
