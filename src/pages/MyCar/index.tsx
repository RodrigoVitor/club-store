import * as C from "./styles"
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export function MyCar () {
    const {state, dispatch} = useContext(Context)
    return (
        <C.Container>
            <C.Box>
                <C.Title>Camiseta do {state.cart.name}</C.Title>
                <C.Price> R$ {state.cart.price}</C.Price>
                <a href="#"><Trash size={25} /></a>
            </C.Box>
            <C.Box>
                <C.Title>Camiseta de Time</C.Title>
                <C.Price> R$ 0,00</C.Price>
                <a href="#"><Trash size={25} /></a>
            </C.Box>
            <C.Box>
                <C.Title>Camiseta de Time</C.Title>
                <C.Price> R$ 0,00</C.Price>
                <a href="#"><Trash size={25} /></a>
            </C.Box>
            <C.Box>
                <C.Title>Camiseta de Time</C.Title>
                <C.Price> R$ 0,00</C.Price>
                <a href="#"><Trash size={25} /></a>
            </C.Box>
            <C.Box>
                <C.Title>Camiseta de Time</C.Title>
                <C.Price> R$ 0,00</C.Price>
                <a href="#"><Trash size={25} /></a>
            </C.Box>
            <C.Box>
                <C.Title>Camiseta de Time</C.Title>
                <C.Price> R$ 0,00</C.Price>
                <a href="#"><Trash size={25} /></a>
            </C.Box>
            <C.Box>
                <C.Title>Camiseta de Time</C.Title>
                <C.Price> R$ 0,00</C.Price>
                <a href="#"><Trash size={25} /></a>
            </C.Box>
            <C.Box>
                <C.Title>Camiseta de Time</C.Title>
                <C.Price> R$ 0,00</C.Price>
                <a href="#"><Trash size={25} /></a>
                
            </C.Box>
        </C.Container>
    )
}