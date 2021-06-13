import {GETTING_DATA, CHANGE_PAGE} from "../actions/actionsType";

const initialState = {
    data: [],
    pages: '',
    currentPage: '1',
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GETTING_DATA:
            return {
                ...state,
                data: action.payload,
                pages: action.payloadPages,
                loading: true
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}