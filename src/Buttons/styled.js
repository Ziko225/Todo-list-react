import styled from "styled-components";

export const ButtonsBlock = styled.div`
    display:flex;

    @media (max-width:767px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    align-self: flex-end;
    color: teal;
    background-color: white;
    border-style: none;
    font-size: 18px;
    margin: 0px 10px;
    transition: 0.3s;

    &:hover{
        color: rgb(0, 169, 169);
    }

    &:hover:disabled{
        color: #bbb;
    }

    &:disabled{
        color: #bbb;
        cursor:default;
    }

    &:active{
        color: rgb(0, 189, 189);
    }

    @media (max-width:767px) {
        margin-top: 20px;
        align-self: center;
    }
`;