import styled from "styled-components";

export const FormBlock = styled.form`
    flex-basis:100%;
    display:flex;
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const FormInput = styled.input`
    height: 30px;
    width: 100%;
    flex-basis: 2;
    @media (max-width: 767px) {
        flex-shrink: 0;
        width: 98%;
    }
`;

export const Button = styled.button`
    flex-shrink: 0;
    height: 35.94px;
    background-color: teal;
    color: white;
    border-style: none;
    transition: 0.3s;
    margin-left: 10px;

    &:hover{
        background-color: rgb(0, 162, 162);
    transform: scale(1.06);
    cursor:pointer;
    }

    &:active{
        background-color: rgb(0, 190, 190);
    }   

    @media (max-width: 767px) {
        width: 100%;
        margin: 10px 0px 0px 0px;
    }
`;