import * as C from './App.styled'
import { Router } from './routes/Router'
import { Link } from 'react-router-dom'
import { Scroll } from './components/scroll'

function App () {
  return (
    <C.Container>
      <C.Header>
        <C.Title>
          <Link to="/">ClubStore</Link>  
        </C.Title>
        <C.LinkDiv>
          <Link to="/">Home</Link>
          <Link to="/meu-carrinho">Meu Carrinho</Link>
        </C.LinkDiv>
      </C.Header>
      <Router />
      <C.Footer>
        <p>
          <Link to="/" onClick={() => window.scrollTo(0,0)}>ClubStore</Link>  
        </p>
        <span>Made <a href="#">Rodrigo Vitor</a></span>
      </C.Footer>
      <Scroll />
    </C.Container>
  )
}

export default App