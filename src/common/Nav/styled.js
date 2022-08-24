import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 40px;
    background-color: teal;
`;

export const Link = styled(NavLink)`
    margin:10px;
    color:white;
    text-decoration: none;
    font-weight:300;

    &.active{
        font-weight:800;
    }
`;