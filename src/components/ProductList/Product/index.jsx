import { StyledProduct } from "./product";
import { StyledButton } from "../../../styles/button";

export const ProductCard = ({product, addProductToCart}) => {
  return (
    <StyledProduct>
      <div className="img__productContainer">
        <img className="productImg" src={product.img} alt={product.name} />
      </div>
      <h2 className="heading3 productName">{product.name}</h2>
      <h3 className="caption productType">{product.category}</h3>
      <p className="body unitPrice">
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <StyledButton
        className="btnAddToCart"
        btnStyle={"btn-md-green"}
        type="button"
        onClick={() => addProductToCart(product)}
      >
        Adicionar
      </StyledButton>
    </StyledProduct>
  );
};
