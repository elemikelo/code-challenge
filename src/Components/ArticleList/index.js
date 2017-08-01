import React from 'react';
import './articleList.css';
import Article from '../Article';

const ArticleList = (props) => (
  <ul className="article-list" >
    {
      props.articles.map(article => {
        return (
          <Article
            key={article.id}
            {...article}
          />
        )
      })
    }
  </ul>
)

export default ArticleList;
