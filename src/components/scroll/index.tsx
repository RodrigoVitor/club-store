import { ArrowUp } from 'phosphor-react'
import { useState } from 'react'
import * as C from './styles'

export function Scroll () {
    let scroll = window.document.body.scrollTop
    const [isScroll, setIsScroll] = useState(false)
    
    function upScreen () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    function test () {
        if(window.scrollY === 0) {
            setIsScroll(false)
        } else {
            setIsScroll(true)
        }
    }

    window.addEventListener('scroll', test)

    return (
        <div>
            {isScroll &&
                <C.Container>
                    <ArrowUp size={32} onClick={upScreen} />
                </C.Container>
            }
        </div>
    )
}