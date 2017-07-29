import React from 'react'
import './article.css'

function Article(props) {
  return (
    <article className="article" >
      <h3 className="autor-article">{props.author}</h3>
      <p className="excerpt-article">{props.excerpt}</p>
    </article >
  )
}

export default Article