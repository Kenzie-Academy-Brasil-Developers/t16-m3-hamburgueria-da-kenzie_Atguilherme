import { GlobalStyle } from "./styles/global";
import { StyledInput } from "./styles/input";
import { StyledButton } from "./styles/button";
import { StyledDivSearch } from "./styles/divSeach";
import { StyledHeader } from "./styles/header";
import { StyledProductList } from "./styles/productList";
import { StyledCart } from "./styles/cart";
import { DefaultTemplate } from "./templates/TemplateDefault";
import { StyledDivContainer } from "./styles/divContainer";
import { StyledProduct } from "./styles/product";
import { useState, useEffect } from "react";
import { api } from "./services/api";
import { CartItem } from "./components/Cart/CartItem";

function App() {

  const cartLocalStorage = localStorage.getItem('@BurguerKenzie')
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(cartLocalStorage ? JSON.parse(cartLocalStorage) : []);

  useEffect(() => {
    localStorage.setItem('@BurguerKenzie', JSON.stringify(cartList))
  }, [cartList])
    //cartList.length > 0 ? StyledCart(cartList) : 

  console.log(cartList)

  // daria para usar o find ou o some o find retorna um objeto o some retorna um boolean
  const addProductToCart = (product) => {
    console.log(product)
    if(!cartList.some(cartProduct => cartProduct.id === product.id)){
      const newCartList = [...cartList, product]
      setCartList(newCartList)
      
    } else {
      console.log("Produto já está no carrinho")
    }
  }

  const removeProductFromCart = (productId) => {
    const newCartList = cartList.filter(product => product.id !== productId)
    setCartList(newCartList)
  }

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        );
        setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProduct();
  }, []);

  return (
    <div className="App">
      <DefaultTemplate>
        <GlobalStyle />
        <StyledHeader>
          <div className="header__container">
            <div className="img__container">
              <img className="productImg" src="./src/assets/logo.svg" />
            </div>
            <StyledDivSearch className="div__search">
              <StyledInput placeholder="Digitar pesquisa"></StyledInput>
              <StyledButton btnStyle={"btn-md-green"} type="button">
                Pesquisar
              </StyledButton>
            </StyledDivSearch>
          </div>
        </StyledHeader>
        <StyledDivContainer>
          <StyledProductList productList={productList}>
            {productList.map((product) => (
              <li key={product.id}>
                <StyledProduct>
                  <div className="img__productContainer">
                    <img
                      className="productImg"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <h2 className="heading3 productName">{product.name}</h2>
                  <h3 className="caption productType">{product.category}</h3>
                  <p className="body unitPrice">{product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}</p>
                  <StyledButton cartList={cartList}
                    className="btnAddToCart"
                    btnStyle={"btn-md-green"}
                    type="button"
                    onClick={() => addProductToCart(cartList)}
                  >
                    Adicionar
                  </StyledButton>
                </StyledProduct>
              </li>
            ))}
          </StyledProductList>
          <StyledCart cartList={cartList}>
            <div className="cart__container">
              <div className="cart__header">
                <h2 className="heading3">Carrinho de compras</h2>
              </div>
              <div className="cart__body">
                {cartList.map(cartProduct => {
                  <li>
                    console.log(cartProduct)
                    <CartItem key={cartProduct.id} cartProduct={cartProduct}></CartItem>
                  </li>
                })}

                
              </div>
              <div className="cart__totalContainer">
                <div className="cart__totalData">
                  <h3>Total</h3>
                  <p>R$ 14,00</p>
                </div>
                <StyledButton btnStyle={"btn-lg-gray"} type="button">
                  Remover todos
                </StyledButton>
              </div>
            </div>
          </StyledCart>
        </StyledDivContainer>
      </DefaultTemplate>
    </div>
  );
}

export default App;
