import styled from "styled-components";

export const StyledProductList = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 95vw;
  max-width: 620px;
  height: 361px;
  margin-left: 3%;

  .container__productList {
    display: flex;
    gap: 10px;
    width: 95vw;
    max-width: 620px;
    height: 361px;
    overflow-x: auto;
  }

  li {
    list-style: none;
  }

  @media (min-width: 769px) {
    margin-top: 20px;
    flex-wrap: wrap;
    width: 50%;
    margin: 20px 0 0 0;
    height: 80vh;

    .container__productList {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      height: 87vh;
    }
  }

  @media (min-width: 930px) {
    width: 70%;
    height: 87vh;
    max-width: 100%;

    .container__productList {
      gap: 10px;
      width: 95vw;
      max-width: 620px;

      
    }
  }
`;
