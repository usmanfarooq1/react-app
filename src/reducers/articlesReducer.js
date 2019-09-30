import {FETCH_ARTICLES_BEGIN,FETCH_ARTICLES_FAILURE,FETCH_ARTICLES_SUCCESS} from '../actions/articles_actions';
const initialState={
    articles_next:0,
    articles_prev:0,
    articles :[],
    loading: false,
    error: null 
}
export default function articlesReducer (state =initialState, action){
    // console.log(state)
    if(action.type===FETCH_ARTICLES_BEGIN){
        return {
            ...state,
            loading:true,
            error:null
        }
    }else if(action.type===FETCH_ARTICLES_SUCCESS){
      
        return {
            ...state,
            loading:false,
            articles:action.payload.articles.docs,
            articles_next:state.articles_next+1,
        }
    }else if(action.type===FETCH_ARTICLES_FAILURE){
        return {
            ...state,
            loading:false,
            error:action.payload.error
        }
    }
    
    return state;
}