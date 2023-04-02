import { ProductCard } from "./Product";
import { StyledProductList } from "./productList";

export const ProductList = ({ productList, addProductToCart, searchResults, search, setSearch }) => {

  const currentProductList = search !== "" ? searchResults : productList
  return (
    <StyledProductList productList={productList}>
      <ul className="container__productList">
        {currentProductList.map((product) => (
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
