import styled from 'styled-components'

export const Figure = styled.figure`
    
    @media screen and (max-width:430px) {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`

export const Image = styled.img`
    margin-top:55px;
`

export const Price = styled.p`
    color: #DFF3E3;
    font-size:1.7rem;
    margin-top:10px;
`

export const Subtitle = styled.figcaption`
    color: #DFF3E3;
    font-size:1.4rem;
    margin-top:10px;
`

export const Button = styled.button`
    font-size:1.2rem;
    padding:14px;
    margin-top:10px;
    background: #111;
    border:none;
    cursor:pointer;
    color:#dff3e3;
    border-radius:14px;
    transition: all ease 1s;

    &:hover {
        background-color: #161619
    }
`