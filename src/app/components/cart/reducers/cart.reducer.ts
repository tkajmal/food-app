
import { element } from "protractor";
import { CartAction, CartActionTypes } from "../actions/cart.actions";
import { CartItem } from "../models/cart-item.model";

const initailStates: CartItem =
{
    foodName: 'test',
    foodPrice: 2,
    foodImage: 'test',
    foodID : 1
}


export function CartReducer(state: CartItem[] = [], action: CartAction) {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case CartActionTypes.DEL_ITEM:
            console.log(action.payload)
            console.log(state)
            // state.splice(action.payload,1);
            return state.filter(element => element.foodID !== action.payload)
             
        case CartActionTypes.REMOVE_ALL_ITEM:
            console.log(action.payload)
            state = [];
            return state
        default:
            return state
    }
}