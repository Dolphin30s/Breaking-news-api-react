import { combineReducers } from "redux";
import episodesReducer from "./episodes/episodes-reducer";
import charactersReducer from "./characters/characters-reducer";
import quotesReducer from "./quotes/quotes-reducer";
import inputsReducer from "./Inputs/Inputs-reducer";

const rootReducer = combineReducers({
    episodesReducer,
    charactersReducer,
    quotesReducer,
    inputsReducer
});

export default rootReducer;