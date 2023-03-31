import { ProductCard } from "./Product";
import { StyledProductList } from "./productList";

export const ProductList = ({ productList, addProductToCart }) => {
  return (
    <StyledProductList productList={productList}>
      <ul className="container__productList">
        {productList.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              addProductToCart={addProductToCart}
            />
          </li>
        ))}
      </ul>
    </StyledProductList>
  );
};
