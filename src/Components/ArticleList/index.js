import React from 'react';
import './articleList.css';
import Article from '../Article';

function ArticleList(props) {
  return (
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
}

export default ArticleList;
