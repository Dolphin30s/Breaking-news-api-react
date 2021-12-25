import { combineReducers } from "redux";
import episodesReducer from "./episodes/episodes-reducer";
import charactersReducer from "./characters/characters-reducer";
import quotesReducer from "./quotes/quotes-reducer";

const rootReducer = combineReducers({
    episodesReducer,
    charactersReducer,
    quotesReducer
});

export default rootReducer;