import styled from "styled-components";

export const StyledDivContainer = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: center;
  height: 1050px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 3%;
  }
`;
