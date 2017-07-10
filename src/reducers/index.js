import { ADD_WORD } from '../constants'

const words = (state = [], action) => {
    let words = null;

    switch (action.type){
        case ADD_WORD:
            words = [...state, action.title];
            return words;
        default:
            return state;
    }
}

export default words;