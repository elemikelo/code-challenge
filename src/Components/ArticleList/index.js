import React, { Component } from 'react';
import './articleList.css';
import Article from '../Article';
import { connect } from 'react-redux';
import { loadArticles, deleteArticle } from '../../actions';

class ArticleList extends Component {

  // lifecycle
  componentWillMount() {
    this.props.loadArticles();
  }

  handleClickDelete(articleId) {
    this.props.deleteArticle(articleId);
  }

  render() {
    return (
      <ul className="article-list" >
        {
          this.props.articles.map(article => {
            return (
              <Article
                key={article.id} {...article}
                eventDeteleArticle={this.handleClickDelete.bind(this, article)} />)
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadArticles(articles) {
      dispatch(loadArticles(articles));
    },
    deleteArticle(article) {
      dispatch(deleteArticle(article));
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);