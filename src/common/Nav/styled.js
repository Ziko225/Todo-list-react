import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 50px;
    background-color: teal;
`;

export const Link = styled(NavLink)`
    margin:10px;
    color:white;
    text-decoration: none;
    font-weight:300;

    :hover{
        border-bottom:1px solid;
    }

    &.active{
        font-weight:800;
        color:white;
        cursor: default;
        border-bottom: none;
    }
`;