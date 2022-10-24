import { ReducerActionType } from "../types/ReducerActionType"

export type CartType = {
    name: string,
    price: number
    id: string
}

export const cartInitialState: CartType[] = [
    {
        name: '',
        price: 0,
        id: '',
    }
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
        break

        case 'DEL': 
            return state
    }

    return state
}