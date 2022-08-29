import styled from "styled-components";

export const Header = styled.h2`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 0px;
    border-bottom: 2px solid #eee;
    
    @media (max-width:767px) {
        justify-content: stretch;
        flex-direction: column;
    }
`;

export const Block = styled.section`
    background-color: white;
    margin: 10px 0;
    box-shadow: 0.5px 0.5px 1px #aaa;
`;

export const Content = styled.div`
    display:flex;
    padding: 20px;
`;