import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

  .header__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 139px;

    background: var(--gray20);
  }

  .img__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 60px;
  }

  .div__search {
    background-color: #ffffff;
    border: none;
  }

  input{
        border: none;
    }


  button {
    background-color: var(--primary);
    :hover {
      background-color: var(--primary-50);
    }
  }

  @media (min-width: 769px) {
    .header__container {
      flex-direction: row;
      justify-content: space-between;
      height: 80px;
      padding: 0 3%;
    }
  }
`;
