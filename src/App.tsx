import * as C from './App.styled'
import { Teams } from './components/teams'
import { Bayer, Barcelona, Corinthians, Flamengo, Palmeiras, River } from './hooks/teamsHook'

function App () {
  return (
    <C.Container>
      <C.Header>
        <C.Title>ClubStore </C.Title>
        <div>
          <C.Link>Home</C.Link>
          <C.Link>Meu Carrinho</C.Link>
        </div>
      </C.Header>
      <C.Main>
        <Teams img={Bayer.img} price={Bayer.price} team={Bayer.team} />
        <Teams img={Barcelona.img} price={Barcelona.price} team={Barcelona.team} />
        <Teams img={Corinthians.img} price={Corinthians.price} team={Corinthians.team} />
        <Teams img={Flamengo.img} price={Flamengo.price} team={Flamengo.team} />
        <Teams img={Palmeiras.img} price={Palmeiras.price} team={Palmeiras.team} />
        <Teams img={River.img} price={River.price} team={River.team} />
      </C.Main>
      <C.Footer>
        <p>ClubStore</p>
        <span>Made <a href="#">Rodrigo Vitor</a></span>
      </C.Footer>
    </C.Container>
  )
}

export default App