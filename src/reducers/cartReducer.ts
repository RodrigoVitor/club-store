import { ReducerActionType } from "../types/ReducerActionType"

export type CartType = {
    name?: string,
    price?: number
    id?: string
}

export const cartInitialState: CartType[] = [
    
]

export function cartReducer (state: CartType[], action: ReducerActionType) {
    switch (action.type) {
        case 'ADD':
            let name = action.payload.name 
            let price = action.payload.price
            let id = action.payload.id
            let newCart = [...state]
            newCart.push({name,price, id})
            return newCart
        

        case 'DEL': 
            let newArray = state.filter(cart => cart.id !== action.payload.id)
            return newArray
            
        case 'DEL_ALL':
            let newArrayCart = [...state]
            newArrayCart = []
            return newArrayCart
    }

    return state
}