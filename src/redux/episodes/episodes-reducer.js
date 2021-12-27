const initialState = {
    episodes: [],
    episode: []
};

export default function episodesReducer(state = initialState, action) {

    switch (action.type) {

        case "GET_EPISODES":
            return { episodes: action.payload }

        case "GET_EPISODE_BY_ID":
            return { ...state, episode: action.payload };

        case "DELETE_EPISODE":
            return { ...state, episode: [] };

        default:
            return state;
    }
}