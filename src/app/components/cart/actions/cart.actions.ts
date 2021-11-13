import {Injectable} from '@angular/core'
import {Action} from '@ngrx/store';
import {CartItem} from '../models/cart-item.model'

export enum CartActionTypes {
    ADD_ITEM = '[CART] Add Item',
    DEL_ITEM = '[CART] Del Item',
    REMOVE_ALL_ITEM = '[CART] Rem Item'
}

export class AddItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM

    constructor(public payload : CartItem) {}
}

export class DelItemAction implements Action {
    readonly type = CartActionTypes.DEL_ITEM

    constructor(public payload : number) {}
}
export class RemoveAllItemAction implements Action {
    readonly type = CartActionTypes.REMOVE_ALL_ITEM

    constructor(public payload : string) {}
}

export type CartAction = AddItemAction | DelItemAction | RemoveAllItemAction