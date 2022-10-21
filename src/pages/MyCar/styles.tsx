import styled from 'styled-components'

export const Container = styled.div`
    color:#fff;
    min-height:60vh
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
