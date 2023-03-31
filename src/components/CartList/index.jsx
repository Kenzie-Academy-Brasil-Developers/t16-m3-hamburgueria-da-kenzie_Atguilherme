import { StyledCartList } from "./cart";
import { CartItem } from "./CartItem";
import { StyledButton } from "../../styles/button";

export const CartList = ({
  cartList,
  cartTotal,
  removeProductFromCart,
  removeAllProductsFromCart,
}) => {
  return (
    <StyledCartList>
      <div className="cart__container">
        <div className="cart__header">
          <h2 className="heading3">Carrinho de compras</h2>
        </div>
        <div className="cart__body">
          {cartList.length > 0 ? (
            <ul>
              {cartList.map((cartItem) => {
                return (
                  <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    removeProductFromCart={removeProductFromCart}
                  />
                );
              })}
            </ul>
          ) : (
            <>
              <h2 className="bag__text">Sua Sacola está vazia</h2>
              <p className="bag__addItens">adicione itens</p>
            </>
          )}
        </div>

        {cartTotal > 0 ? (
          <div className="cart__totalContainer">
            <div className="cart__totalData">
              <h3>Total</h3>
              <p>
                {cartTotal.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <StyledButton
              btnStyle={"btn-lg-gray"}
              type="button"
              onClick={() => removeAllProductsFromCart()}
            >
              Remover todos
            </StyledButton>
          </div>
        ) : null}
      </div>
    </StyledCartList>
  );
};
