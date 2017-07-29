import React from 'react'
import './articleList.css'
import Article from '../Article'

function ArticleList(props) {
  return (
    <ul className="article-list" >
      {
        props.articles.map(article => {
          return (
            <Article
              id={article.id}
              author={article.author}
              excerpt={article.excerpt}
            />
          )
        })
      }
    </ul>
  )
}

export default ArticleList
