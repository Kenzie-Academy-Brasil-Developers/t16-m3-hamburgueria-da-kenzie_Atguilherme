import styled from "styled-components";

export const StyledFormSearch = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;

  background: #ffffff;
  border-radius: 8px;
  padding: 0 10px;

  @media (min-width: 769px) {
    justify-content: space-between;
    max-width: 1100px;
  }
`;
