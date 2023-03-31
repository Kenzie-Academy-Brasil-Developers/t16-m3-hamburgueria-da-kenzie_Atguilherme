import { StyledDivContainer } from "./DivContainer";
import { ProductList } from "../ProductList";
import { CartList } from "../CartList";

export const DivContainer = ({
  productList,
  addProductToCart,
  removeProductFromCart,
  removeAllProductsFromCart,
  cartList,
  cartTotal,
}) => {
  return (
    <StyledDivContainer>
      <ProductList
        productList={productList}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
      />

      <CartList
        cartList={cartList}
        cartTotal={cartTotal}
        removeProductFromCart={removeProductFromCart}
        removeAllProductsFromCart={removeAllProductsFromCart}
      />
    </StyledDivContainer>
  );
};
