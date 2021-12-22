
const initialState = {
    // degree: degreeFromStorage != null ? degreeFromStorage : 'Celsius'
    characters: [],
    character: []
};

export default function charactersReducer(state = initialState, action) {

    switch (action.type) {

        case "GET_CHARACTERS":
            return { characters: action.payload }

        case "GET_CHARACTERS_BY_ID":
            return { character: action.payload };

        default:
            return state;
    }
}