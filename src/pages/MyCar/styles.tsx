import styled from 'styled-components'

export const Container = styled.div`
    color:#fff;
    min-height:60vh
`

export const Info = styled.p`
    text-align:center;
    padding: 70px 0 0 0;
    font-size:1.6rem;
    color: #DFF3E3
    
`

export const Box = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:25px;
    width:400px;
    margin:25px auto;
    border-bottom:1px solid #ccc;
    padding: 10px;

    a {
        color:red;
        transition: ease all 1s
    }
    a:hover {
        transform: scale(1.2)
    }
`

export const Title = styled.p``

export const Price = styled.span``

export const Button = styled.button`
    display:block;
    margin:auto;
    padding:14px;
    border-radius:10px;
    border:none;
    background-color:#454ADE;
    color: #DFF3E3;
    font-size:1rem;
    cursor:pointer;
    transition: all ease .8s;

    &:hover {
        background-color:#565BEF;
    }
`
