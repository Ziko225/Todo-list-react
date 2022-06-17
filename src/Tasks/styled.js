import styled, { css } from "styled-components"

export const List = styled.ul`
    padding: 0px;
    margin:0px;
`;

export const Item = styled.li`
    display: flex;
    border-bottom: 2px solid #eee;
    padding: 10px 20px;
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display:none
    `}
`;

export const Content = styled.span`
    flex-grow: 1;
    padding: 5px;

    ${({ check }) => check && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-style: none;
    padding: 0px;
    color: white;
    transition: 0.3s;

    ${({ toggleCheck }) => toggleCheck && css`
         background-color: rgb(6, 180, 0);
         cursor:pointer;
         &:hover{
            background-color: rgb(0, 205, 0);
         }
    `}

    ${({ remove }) => remove && css`
        background-color: rgb(190, 0, 0);
        cursor:pointer;
         &:hover{
            background-color: rgb(230, 0, 0);
         }
    `}
`;