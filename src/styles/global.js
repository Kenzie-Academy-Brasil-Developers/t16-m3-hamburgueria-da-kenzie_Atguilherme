import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        list-style: none;
    }

    :root {
        font-family: Inter, sans-serif;
        line-height: 1.5;    
        
        --primary:#27AE60;
        --primary-50: #93D7AF;
        --secondary:#EB5757;

        --gray100:#333333;
        --gray50:#828282;
        --gray20:#E0E0E0;
        --gray0:#F5F5F5;

        --negative:#E60000;
        --warning:#FFCD07;
        --sucess:#168821;
        --information:#155BCB;

        .heading1{
            font-size: 26px;
            font-weight: 700;
        }
        .heading2{
            font-size: 22px;
            font-weight: 700;
        }
        .heading3{
            font-size: 18px;
            font-weight: 700;
        }
        
        .heading4{
            font-size: 14px;
            font-weight: 700;
        }
        
        .headline{
            font-size: 16px;
            font-weight: 200;
        }

        .body{
            font-size: 14px;
            font-weight: 400;
            color: var(--primary);
        }

        .body-600{
            font-size: 14px;
            font-weight: 600;
        }

        .caption{
            font-size: 12px;
            font-weight: 400;
        }

        .caption600{
            font-size: 12px;
            font-weight: 600;
        }

    }

`

  