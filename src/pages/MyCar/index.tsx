import * as C from "./styles"
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export function MyCar () {
    const {state, dispatch} = useContext(Context)
    console.log(state.cart[0])
    return (
        <C.Container>
            {state.cart.map(cart => (
                <C.Box key={cart.id}>
                    <C.Title>Camiseta do {cart.name}</C.Title>
                    <C.Price> R$ {cart.price}</C.Price>
                    <a href="#"><Trash size={25} /></a>
                </C.Box>
            ))}
        </C.Container>
    )
}