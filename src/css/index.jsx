import React from 'react';
import styled from 'styled-components';
import img from '../images/cover.jpg'

export const Body_html = styled.body`
    background: url(${img}) no-repeat center top;
    background-size: 100% auto;
    color: #fff;
`;

export const A_link = styled.a`
    color: #FBD784;
    transition: opacity 0.3s;
    opacity: 1;
     :hover {
    opacity: 0.7;
    } 
     :visited {
    color: #ffecc0;
    }
    :active {
    opacity: 0.7;
    } 
`;

export const Main_nav = styled.nav`
    display: flex;
    justify-content: center;
    color: #000;
    text-decoration: wavy;
`;

export const Cover_space = styled.div`
    padding-bottom: 82%;
`;

export const Header_q = styled.div`
    position: absolute;
    top: 2rem;
    width: 100%;
`;

export const Header_content = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 0 4.7rem;
    align-items: center;
`;



