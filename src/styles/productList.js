import styled from "styled-components";

export const StyledProductList = styled.section`
    display: flex;
    gap: 10px;
    width: 620px;
    height: 361px;
    margin-left: 3%;
    overflow-x: auto;

    li{
        list-style: none;
    }

    @media (min-width: 769px) {
        margin-top: 20px;
        flex-wrap: wrap;
        width: 50%;
        margin: 20px 0 0 0;
        height: 80vh;
    }

    @media (min-width: 930px) {
        width: 70%;
        height: 87vh;
    }    

`
