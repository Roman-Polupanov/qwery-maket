import React from 'react';
import styled from 'styled-components';
import fcbk from '../images/icons/facebook.svg'
import twtr from "../images/icons/twitter.svg"
import instgm from "../images/icons/instagram.svg"
import srcl from '../images/icons/arrow_downward.svg'

export const Section_main = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 4.7rem;
    right: 4.7rem;
    top: 14vw;
`;

export const Main_title = styled.div`
    font-size: 1rem;
    margin-bottom: 6.2em;
`;

export const Main_title__summary = styled.span`
    font-weight: 700;
    color:#FBD784;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    letter-spacing: .35em;
    margin-bottom: 1.5em;
    ::before {
    content:'';
    display: block;
    width: 4em;
    height: 3px;
    margin-right: 1.5em;
    background: #FBD784;
    }
`;

export const Main_title__text = styled.div`
    font-size: 5.4em;
    font-weight: 700;
    line-height: 1.1;
`;

export const Main_title__text_regular = styled.span`
    display: block;
    font-size: 0.9em;
    font-weight: 400;
`;

export const Social_networks = styled.div`
    position: absolute;
    left: 0;
    top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Social_networks__title = styled.h3`
    writing-mode: vertical-rl;
    margin-bottom: 1.3rem;
`;

export const Social_networks__list = styled.ul`
    
`;

export const Social_networks__item = styled.li`
    margin-bottom: 1rem;
`;

export const Social_networks__link = styled.a`
    opacity: 1;
    transition: opacity 0.3s;
    :hover{
    opacity: 0.7;
}
`;

export const Icon__instagram = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    background: url(${instgm}) no-repeat center center;
    background-size: contain;
`;

export const Icon__facebook = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    background: url(${fcbk}) no-repeat center center;
    background-size: contain;
`;

export const Icon__twitter = styled.div`
    width: 1.3rem;
    height: 1.3rem;
    background: url(${twtr}) no-repeat center center;
    background-size: contain;
`;

export const Scroll_down = styled.a`
    width: 1.3rem;
    height: 1.7rem;
    margin: 0.1em 0 0 0.5em;
    cursor: pointer;
    transition: 0.3s;
    background: url(${srcl}) no-repeat center right;
    background-size: contain;
    :hover {
        opacity: 0.7;
    }
`;

export const Scroll_down_cont = styled.div`
    display: flex;
    flex-direction: row;
`;
