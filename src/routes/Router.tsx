import {Route, Routes} from 'react-router-dom'
import App from '../App'
import { MyCar } from '../pages/MyCar'

export function Router () {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/meu-carrinho" element={<MyCar />} />
        </Routes>
    )
}