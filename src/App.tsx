import * as C from './App.styled'
import { Teams } from './components/teams'
import { Bayer, Barcelona, Corinthians, Flamengo, Palmeiras, River } from './hooks/teamsHook'
import { Router } from './routes/Router'
import { Link } from 'react-router-dom'

function App () {
  return (
    <C.Container>
      <Router />
      <C.Header>
        <C.Title>ClubStore </C.Title>
        <C.LinkDiv>
          <Link to="/">Home</Link>
          <Link to="/meu-carrinho">Meu Carrinho</Link>
        </C.LinkDiv>
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