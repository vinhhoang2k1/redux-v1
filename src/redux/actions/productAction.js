import {ActionType} from '../contain/actionTypes';

export const setProduct = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: ActionType.REMOVE_PRODUCT,
        payload: product
    }
}