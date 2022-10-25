import * as C from './Teams.styled'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

type TeamProp = {
    img: string,
    price: number,
    team: string
}

export function Teams ({img, price, team}: TeamProp) {
    const {state, dispatch} = useContext(Context)
    const id = Math.floor(Math.random() * 1000000).toString()

    function ADD_CART () {
        dispatch({
            type: "ADD",
            payload: {
                name: team,
                price: price,
                id: id
            }
        })
    }

    return (
        <C.Figure>
            <C.Image src={img} alt='Clube de time' />
            <C.Price>R$ {price}</C.Price>
            <C.Subtitle>Camisa do {team}</C.Subtitle>
            <C.Button onClick={ADD_CART}>Add Carrinho</C.Button>
        </C.Figure>
    )
}