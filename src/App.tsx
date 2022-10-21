import * as C from './App.styled'
import { Router } from './routes/Router'
import { Link } from 'react-router-dom'

function App () {
  return (
    <C.Container>
      <C.Header>
        <C.Title>ClubStore </C.Title>
        <C.LinkDiv>
          <Link to="/">Home</Link>
          <Link to="/meu-carrinho">Meu Carrinho</Link>
        </C.LinkDiv>
      </C.Header>
      <Router />
      <C.Footer>
        <p>ClubStore</p>
        <span>Made <a href="#">Rodrigo Vitor</a></span>
      </C.Footer>
    </C.Container>
  )
}

export default App