import {GETMOVIES} from '../actions/movies_actions';
const initialState={
    movies :[],
    movies_initial_empty:true, 
}
export default function moviesReducer (state =initialState, action){
    if(action.type===GETMOVIES){
        return {
            movies: action.payload.movies,
            movies_initial_empty:false

        }
    }
    return state;
}