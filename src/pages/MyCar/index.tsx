import * as C from "./styles"
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export function MyCar () {
    const {state, dispatch} = useContext(Context)

    function DEL_CART (id: string | undefined) {
        dispatch({
            type: 'DEL',
            payload: {
                id: id
            }
        })
    }

    function FINISHED_CART () {
        let allCart: number[] = [];
        let total: number = 0;

        state.cart.map(cart => {
            allCart.push(Number(cart.price))
        })
        allCart.map(cart => (
            total += cart
        ))
        
        alert(`Sua compra deu um total de R$ ${total}`)
        DEL_ALL_CART()

    }

    function DEL_ALL_CART () {
        dispatch({
            type: 'DEL_ALL',
            payload: {}
        })
    }

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
                            <a href="#"><Trash size={25} onClick={() => DEL_CART(cart.id)} /></a>
                        </C.Box>
                    ))}
                </>
            }
            {state.cart.length >= 1 && 
                <>
                    <C.Button onClick={FINISHED_CART}>Finalizar Compra</C.Button>
                </>
            }

        </C.Container>
    )
}