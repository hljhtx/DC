import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: []
} 

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ALL:
            return action.payload;
        case actionTypes.UPDATE:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            };
        default:
            return state    
    }   
}

export default reducer
