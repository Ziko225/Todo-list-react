import styled from "styled-components";

export const Article = styled.article`
    width:100%;
    display:flex;
    justify-content:space-around;
`;

export const Title = styled.span`
    font-weight: 700;
`;

export const Content = styled.p`
    margin-right:10px;
`;

export const Img = styled.img`
    height:400px; 
    @media (max-width:500px) {
        height: 200px;
    }
`;