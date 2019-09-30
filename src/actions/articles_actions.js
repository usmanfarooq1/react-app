import axios from 'axios';
// export const GETARTICLES = 'GETARTICLES';
export const FETCH_ARTICLES_BEGIN   = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchARTICLESBegin = () => ({
  type: FETCH_ARTICLES_BEGIN
});

export const fetchARTICLESSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles }
});

export const fetchARTICLESFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error }
});
// const getArticles=(articles)=>{
//   return {
//     type:GETARTICLES,
//     articles
//   }
// }

export function getArticlesAsync(search_parameter) {
    return (dispatch, getState)=>{
      dispatch(fetchARTICLESBegin());
      return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search_parameter}&api-key=EcOKNAa9YG6EnXDDw9CXGaVAga1jUbBq`)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        dispatch(fetchARTICLESSuccess(json.response));
        
        return json.response;
      })
      .catch(error => dispatch(fetchARTICLESFailure(error)));
      // axios.get().then(response=>{
      //     console.log(response)
      // })
    }
  }

