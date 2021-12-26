
const initialState = {
    search: '',
    season: null,
    sort: 'Ascending'
};

export default function inputsReducer(state = initialState, action) {

    switch (action.type) {

        case "UPDATE_SEARCH":
            return { ...state, search: action.payload };
        case "UPDATE_SEASON":
            return { ...state, season: action.payload };
        case "UPDATE_SORT":
            return { ...state, sort: action.payload };
        default:
            return state;
    }
}