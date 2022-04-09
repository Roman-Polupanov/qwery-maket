import React from 'react';
import styled from 'styled-components';
import rght from '../images/icons/arrow_rightward.svg'
import enjoy from '../images/enjoy.jpg'

export const Content = styled.div`
    padding: 0 4.7rem 4.7rem;
    max-width: 1460px;
    margin: 0 auto;
`;

export const Section_cols = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center ;
`;


export const Section_col_image = styled.div`
    background-image: url(${enjoy});

`;

export const Main_title_small = styled.div`
    
`;


export const Section_col = styled.div`
   &:first-child {
       width: 40%;
   }
   &:last-child {
       width: 44%;
   }
`;

export const Section_col_cont = styled.div`
    
`;

export const Arrow_right_cont = styled.div`
    display: flex;
    flex-direction: row;
`

export const Arrow_right = styled.a`
    width: 1.4rem;
    height: 1rem;
    cursor: pointer;
    background: url(${rght}) no-repeat center right;
    background-size: contain;
`;