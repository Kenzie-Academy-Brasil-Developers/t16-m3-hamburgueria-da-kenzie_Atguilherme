import { StyledHeader } from "./header";
import { StyledInput } from "./InputSearch/input";
import { StyledButton } from "../../styles/button";
import { StyledDivSearch } from "./divSearch";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header__container">
        <div className="img__container">
          <img className="productImg" src={logo} />
        </div>
        <StyledDivSearch className="div__search">
          <StyledInput
            placeholder="Digitar pesquisa"
            id="inputSearch"
          ></StyledInput>
          <StyledButton
            btnStyle={"btn-md-green"}
            type="button"
            onClick={() => {
              filterSearch(inputSearch.value);
            }}
          >
            Pesquisar
          </StyledButton>
        </StyledDivSearch>
      </div>
    </StyledHeader>
  );
};
