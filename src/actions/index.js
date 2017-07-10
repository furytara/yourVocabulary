import { ADD_WORD } from '../constants'

export const addWord = (title) => {
    const action = {
        type: ADD_WORD,
        title
    }
    return action
}