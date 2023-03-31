import styled from "styled-components";

export const StyledDivContainer = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  height: 1050px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 3%;
    height: 1050px;
  }
`;
