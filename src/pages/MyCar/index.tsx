import * as C from "./styles"
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export function MyCar () {
    const {state, dispatch} = useContext(Context)
    return (
        <C.Container>
            {state.cart.length < 1 && 
                <>
                    <C.Info>Carrinho vazio</C.Info>
                </>
            }
            {state.cart.length >= 1 && 
                <>              
                    {state.cart.map((cart, index) => (
                        <C.Box key={index}>
                            <C.Title>Camiseta do {cart.name}</C.Title>
                            <C.Price> R$ {cart.price}</C.Price>
                            <a href="#"><Trash size={25} /></a>
                        </C.Box>
                    ))}
                </>
            }
        </C.Container>
    )
}