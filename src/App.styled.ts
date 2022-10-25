import styled from 'styled-components'

export const Container = styled.div``

export const Header  = styled.header`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:25px 0
`

export const Title = styled.h1`
    a {
        color: #454ADE;
        text-decoration:none
    }
`
export const LinkDiv = styled.div`
    a {
        color: #DFF3E3;
        margin-right:15px;
        cursor:pointer;
        text-decoration:none;
        transition: all ease 1s;

        &:hover {
            color:#ccc;
            text-decoration:underline
        }
    }
`


export const Footer = styled.footer`
    padding:25px 0 10px 0;
    border-top:1px solid #fff;
    margin:30px 0;

    p {
        color:#454ADE;
        font-size: 25px;;
        text-align:center
    }
    p a {
        color: #454ADE;
        text-decoration:none
    }

    span {
        display:block;
        text-align:center;
        color: #DFF3E3;
        margin-top:10px;
    }
    span a {
        text-decoration:none;
        color: #DFF3E3
    }
    span a:hover {
        color:#ccc;
        text-decoration:underline
    }
`