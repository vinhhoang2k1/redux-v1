import {ActionType} from '../contain/actionTypes'
const initstate = {
    products:[]
}
export const productReducer = (state = initstate, {type, payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return { products: payload};
        
        default:
            return state;
    }
}
export const selectedProduct = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {...payload };
        case ActionType.REMOVE_PRODUCT:
            return {};
        default:
            return state;
    }
}
