import { StyledHeader } from "./header";
import { StyledInput } from "./InputSearch/input";
import { StyledButton } from "../../styles/button";
import { StyledFormSearch } from "./formSearch";
import logo from "../../assets/logo.svg";
import { useState } from "react";

export const Header = ({setSearch, searchResults}) => {

  const [searchInput, setSearchInput] = useState("")

  const submit = (event) => {
    event.preventDefault()
    setSearch(searchInput)
    setSearchInput("")
  }

  return (
    <StyledHeader>
      <div className="header__container">
        <div className="img__container">
          <img className="productImg" src={logo} />
        </div>
        <StyledFormSearch className="form__search" onSubmit={submit}>
          <StyledInput
            placeholder="Digitar pesquisa"
            id="inputSearch"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}

          ></StyledInput>
          <StyledButton
            btnStyle={"btn-md-green"}
            type="submit"
          > 
          
          {searchResults !== "" ? "Pesquisar" : "Limpar pesquisa"}
          </StyledButton>
        </StyledFormSearch>
      </div>
    </StyledHeader>
  );
};
