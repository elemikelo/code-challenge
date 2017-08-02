import { GET_ARTICLES, GET_ARTICLE, DELETE_ARTICLE } from '../types';

const initialState = {
  articles: [],
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.payload };
    case GET_ARTICLE:
      return { ...state, articles: action.payload };
    case DELETE_ARTICLE:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
}

export default articlesReducer;