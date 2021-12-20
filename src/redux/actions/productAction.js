import {ActionType} from '../contain/actionTypes';
import storeApi from '../../Apis/storeApi'
export const fetchProducts = () => async (dispatch) => {
    const response = await storeApi.get('/products');
    dispatch({type:ActionType.FETCH_PRODUCTS, payload:response.data})
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await storeApi.get(`/products/${id}`);
    dispatch({type:ActionType.SELECTED_PRODUCT, payload:response.data})
}


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