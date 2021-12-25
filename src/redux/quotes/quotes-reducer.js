
const initialState = {
    quotes: []
};

export default function quotesReducer(state = initialState, action) {

    switch (action.type) {

        case "GET_QUOTES":
            return { quotes: action.payload }

        case "GET_QUOTES_BY_NAME":
            return { quotes: action.payload };

        default:
            return state;
    }
}