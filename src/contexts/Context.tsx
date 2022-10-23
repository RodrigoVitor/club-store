import { createContext, useReducer } from 'react'
import { CartType, cartInitialState, cartReducer } from '../reducers/cartReducer'
import { ReducerActionType } from '../types/ReducerActionType'

type InitialStateType = {
    cart: CartType
}
type ContextType = {
    state: InitialStateType,
    dispatch: React.Dispatch<any>
}
type Props = {
    children: React.ReactNode
}

const initialState: InitialStateType = {
    cart: cartInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

function mainReducer (state: InitialStateType, action: ReducerActionType) {
    return (
        {
            cart: cartReducer(state.cart, action)
        }
    )
}

export function ContextProvider ({children}: Props) {
    const [state, dispatch] = useReducer(mainReducer, initialState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}