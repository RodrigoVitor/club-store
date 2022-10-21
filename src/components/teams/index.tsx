import * as C from './Teams.styled'

type TeamProp = {
    img: string,
    price: number,
    team: string
}

export function Teams ({img, price, team}: TeamProp) {
    return (
        <C.Figure>
            <C.Image src={img} alt='Clube de time' />
            <C.Price>R$ {price}</C.Price>
            <C.Subtitle>Camisa do {team}</C.Subtitle>
            <C.Button>Add Carrinho</C.Button>
        </C.Figure>
    )
}