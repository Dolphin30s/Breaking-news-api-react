import { combineReducers } from "redux";
import episodesReducer from "./episodes/episodes-reducer";
import charactersReducer from "./characters/characters-reducer";

const rootReducer = combineReducers({
    episodesReducer,
    charactersReducer
});

export default rootReducer;