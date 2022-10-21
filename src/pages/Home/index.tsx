import { Teams } from '../../components/teams'
import * as C from './App.styled'
import { Bayer, Barcelona, Corinthians, Flamengo, Palmeiras, River } from '../../hooks/teamsHook'

export function Home () {
    return (
        <C.Container>
            <C.Main>
                <Teams img={Bayer.img} price={Bayer.price} team={Bayer.team} />
                <Teams img={Barcelona.img} price={Barcelona.price} team={Barcelona.team} />
                <Teams img={Corinthians.img} price={Corinthians.price} team={Corinthians.team} />
                <Teams img={Flamengo.img} price={Flamengo.price} team={Flamengo.team} />
                <Teams img={Palmeiras.img} price={Palmeiras.price} team={Palmeiras.team} />
                <Teams img={River.img} price={River.price} team={River.team} />
            </C.Main>
        </C.Container>
    )
}