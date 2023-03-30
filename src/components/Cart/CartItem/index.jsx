import { StyledButton } from "../../../styles/button"

export const CartItem = ({cartProduct}) => {
    console.log(cartProduct)
    return(
        <div className="cart__item">
        <div className="cart__imgContainer">
          <img src={cartProduct.img} alt={cartProduct.name} />
        </div>
        <div className="cart__produtData">
          <h2 className="heading3">{cartProduct.name}</h2>
          <h3 className="caption">{cartProduct.category}</h3>
        </div>
        <div className="cart__buttonContainer">
          <StyledButton
            className="caption600 cart__buttonContainer"
            btnStyle={"btn-sm-gray"}
            type="button"
          >
            Remover
          </StyledButton>
        </div>
      </div>

    )
}