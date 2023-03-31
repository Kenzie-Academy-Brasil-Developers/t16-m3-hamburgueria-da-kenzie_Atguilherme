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
        console.log(error);
      }
    }
    loadProduct();
  }, []);

  useEffect(() => {
    localStorage.setItem("@BurguerKenzie", JSON.stringify(cartList));
  }, [cartList]);

  // daria para usar o find ou o some o find retorna um objeto o some retorna um boolean
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

  const [filter, setFilter] = useState("");

  const filterSearch = (textToSearch) => {
    const temNaLista = productList.filter((product) =>
      product.name.toLowerCase().includes(
        textToSearch
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
    );

    console.log(temNaLista);
  };

  //const filterRecipeList = recipeList.filter((recipe) => recipe.category === filter);
  return (
    <div className="App">
      <DefaultTemplate>
        <GlobalStyle />
        <ToastContainer autoClose={1500} />
        <Header />
        <DivContainer
          productList={productList}
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
