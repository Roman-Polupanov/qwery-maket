import React from 'react';
import styled from 'styled-components';
import img from '../images/cover.jpg'
import srch from '../images/icons/search.svg'

export const Body_h = styled.body`
    background: url(${img}) no-repeat center top;
    background-size: 100% auto;
    color: #fff;
    font: 18px/1.7 'Open Sans', sans-serif;
`;

export const A_link = styled.a`
    color: #FBD784;
    transition: opacity 0.3s;
    opacity: 1;
    text-decoration: none;
    :hover {
    opacity: 0.7;
    } 
    :visited {
    color: #fff;
    }
    :active {
    opacity: 0.7;
    }
`;

export const Logo = styled.a`
    color: #fff;
    text-decoration: none;
    letter-spacing: 1%; 
    :visited {
    color: #fff;
}
`;
export const Logo_title = styled.h1`
    font-size: 1.3rem;
    font-weight: 700;
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

export const Main_nav__list = styled.ul`
    display: flex;
`;

export const Main_nav__link = styled.li`
    color: #fff;
    text-decoration: none;
    padding: 1.8rem 1.38rem;
    :visited {
    color: #fff;
    }
`;

export const Search = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Search_icon = styled.div`
    width: 1rem;
    height: 1rem;
    background: url(${srch}) no-repeat center center;
    cursor: pointer;
    padding-right: 0.5rem;
    :visited {
    opacity: 0.7;
    }
`;

export const Search__form = styled.input`
    background: none;
    border: none;
    transition: width 0.3s;
    width: 3.4rem;
    font: 0.9rem/1 'Open Sans', sans-serif;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    ::placeholder {
    color: #fff;
    }
    :focus {
    border: none;
    outline: none;
    width: 10rem;
    background: #fff;
    :focus::placeholder {
    color: rgb(0, 0, 0);
}
}
`;

