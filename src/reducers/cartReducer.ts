import { ReducerActionType } from "../types/ReducerActionType"

export type CartType = {
    name: string,
    price: number
    id: string
}

export const cartInitialState: CartType[] = [
    {
        name: 'Corinthians',
        price: 250,
        id: '0',
    },
    {
        name: 'Flamengo',
        price: 170,
        id: '1',
    }
]

export function cartReducer (state: CartType[], action: ReducerActionType) {
    switch (action.type) {
        case 'ADD':
            return state
        break

        case 'DEL': 
            return state
    }

    return state
}