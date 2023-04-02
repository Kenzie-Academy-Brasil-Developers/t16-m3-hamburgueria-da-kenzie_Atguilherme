import { StyledButton } from "../../../styles/button";
import { StyledItem } from "./cartItem";

export const CartItem = ({ cartItem, removeProductFromCart }) => {
  return (
    <StyledItem key={cartItem.id}>
      <div className="cart__item">
        <div className="cart__imgContainer">
          <img src={cartItem.img} alt={cartItem.name} />
        </div>
        <div className="cart__produtData">
          <h2 className="heading3">{cartItem.name}</h2>
          <h3 className="caption">{cartItem.category}</h3>
        </div>
        <div className="cart__buttonContainer">
          <StyledButton
            className="caption600 cart__buttonContainer"
            btnStyle={"btn-sm-gray"}
            type="button"
            onClick={() => removeProductFromCart(cartItem.id)}
          >
            Remover
          </StyledButton>
        </div>
      </div>
    </StyledItem>
  );
};
