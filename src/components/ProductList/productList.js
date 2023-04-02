import styled from "styled-components";

export const StyledProductList = styled.section`
  display: flex;
  justify-content: center;
  width: 95vw;
  height: 361px;
  margin-left: 3%;

  .container__productList {
    display: flex;
    gap: 10px;
    width: 95vw;
    height: 361px;
    overflow-x: auto;

    li {
      list-style: none;
    }
  }


  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
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
    width: 87%;
    height: 87vh;
    max-width: 100%;

    .container__productList {
      /* gap: 10px; */
      width: 95%;
    }
  }
`;
