import styled from "styled-components";

export const FormBlock = styled.form`
    display: flex;
    padding: 10px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const FormInput = styled.input`
    flex-grow: 2;
    height: 30px;
    width: calc(100% - 8px);
`;

export const Button = styled.button`
     flex-shrink: 0;
    height: 35.94px;
    background-color: teal;
    color: white;
    border-style: none;
    transition: 0.3s;
    margin-left: 20px;

    &:hover{
        background-color: rgb(0, 162, 162);
    transform: scale(1.07);
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