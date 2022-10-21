import styled from 'styled-components'

export const Container = styled.div``

export const Header  = styled.header`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:25px 0
`

export const Main = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    padding:0px 25px;

    @media screen and (max-width:430px) {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:0px;
    }
`

