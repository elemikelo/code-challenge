import store from './store';
import { ARTICLES_QUERY, ARTICLE_QUERY, DELETE_ARTICLE_QUERY } from './queries';
import request from './request';
import { GET_ARTICLES, GET_ARTICLE, DELETE_ARTICLE } from './types'

const loadArticles = () => {
  return (dispatch) => {
    request(ARTICLES_QUERY).then(response => {
      dispatch({
        type: GET_ARTICLES,
        payload: response.data.articles
      });
    });
  };
}


const loadArticleId = (id) => {
  return (dispatch) => {
    request(ARTICLE_QUERY(id)).then(response => {
      console.log(response.data.article)
      dispatch({
        type: GET_ARTICLE,
        payload: response.data.article
      });
    });
  };
}


const deleteArticle = ({ id }) => {
  let articles = store.getState().articles.articles;
  return (dispatch) => {
    return request(DELETE_ARTICLE_QUERY(id)).then(() => {
      articles = articles.filter((article) => article.id !== id);
      dispatch({
        type: DELETE_ARTICLE,
        payload: articles
      });
    });
  }
}





export { loadArticles, deleteArticle, loadArticleId }

