import {Route, Routes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { MyCar } from '../pages/MyCar'

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meu-carrinho" element={<MyCar />} />
        </Routes>
    )
}