import { combineReducers } from "redux";
import movies from "./moviesReducer";
import articles from './articlesReducer'
import counter from './counterReducer'
export default combineReducers({
  movies,articles,counter
});
