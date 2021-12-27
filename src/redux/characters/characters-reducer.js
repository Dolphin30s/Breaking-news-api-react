
const initialState = {
    // degree: degreeFromStorage != null ? degreeFromStorage : 'Celsius'
    characters: [],
    character: [],
    count: 12
};

export default function charactersReducer(state = initialState, action) {

    switch (action.type) {
        case "GET_ALL_CHARACTERS":
            return { ...state, characters: action.payload }

        case "GET_CHARACTERS_BY_ID":
            return { ...state, character: action.payload };

        case "DELETE_CHARACTER":
            return { ...state, character: null };

        case "UPDATE_COUNT":
            return { ...state, count: state.count + Number(action.payload) };

        default:
            return state;
    }
}