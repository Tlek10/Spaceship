import {Starship} from "../starship/type";

export interface CartItem extends Starship {
    count: number;
}

export interface CartState {
    items: CartItem[];
}
