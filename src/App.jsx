import { GlobalStyle } from "../src/styles/global";
import { DefaultTemplate } from "./templates/TemplateDefault";
import { Header } from "./components/Header";
import { DivContainer } from "./components/Container";
import { api } from "./services/api";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const cartLocalStorage = localStorage.getItem("@BurguerKenzie");
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(
    cartLocalStorage ? JSON.parse(cartLocalStorage) : []
  );
  const [search, setSearch] = useState("")

  const searchResults = productList.filter(currentProduct => currentProduct.name.toLowerCase().includes(
    search
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  ))


  const cartTotal = cartList.reduce((previousValue, itemPrice) => {
    return previousValue + itemPrice.price;
  }, 0);

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get(
          "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
        );
        setProductList(response.data);
      } catch (error) {
        toast.error(error);
      }
    }
    loadProduct();
  }, []);

  useEffect(() => {
    localStorage.setItem("@BurguerKenzie", JSON.stringify(cartList));
  }, [cartList]);

  const addProductToCart = (product) => {
    if (!cartList.some((cartProduct) => cartProduct.id === product.id)) {
      const newCartList = [...cartList, product];
      setCartList(newCartList);
    } else {
      toast.error("Produto já está no carrinho.");
    }
  };

  const removeProductFromCart = (productId) => {
    const newCartList = cartList.filter((product) => product.id !== productId);
    setCartList(newCartList);
  };

  const removeAllProductsFromCart = () => {
    setCartList([]);
  };

  return (
    <div className="App">
      <DefaultTemplate>
        <GlobalStyle />
        <ToastContainer autoClose={1500} />
        <Header setSearch={setSearch} searchResults={searchResults} />
        <DivContainer
          productList={productList}
          searchResults={searchResults}
          search={search}
          setSearch={setSearch}
          addProductToCart={addProductToCart}
          removeProductFromCart={removeProductFromCart}
          removeAllProductsFromCart={removeAllProductsFromCart}
          cartList={cartList}
          cartTotal={cartTotal}
        />
      </DefaultTemplate>
    </div>
  );
}

export default App;
