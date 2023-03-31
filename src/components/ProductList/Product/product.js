import styled from "styled-components";

export const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray0);
    width: 300px;
    height: 358px;

    .img__productContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 150px;
        background-color: var(--gray0);
    }

    .productImg{
        width: 177px;
        height: 177px;
        object-fit: cover;
    }

    .productName{
        margin-top: 25px;
        margin-left: 10px;
    }

    .productType, .unitPrice, .btnAddToCart{
        margin-top: 20px;
        margin-left: 10px;
    }

`