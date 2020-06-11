
import { ADD_PRODUCT_BASKET } from './types';

export const addBasket = (bookName) => {
    return (dispatch) => {
        console.log("Adding to basket");
        console.log("Books: ", bookName);
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: bookName
        });
    }
}