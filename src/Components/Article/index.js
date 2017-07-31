import React from 'react';
import './article.css';
import { Link } from 'react-router-dom';


function Article(props) {

  return (
    <article className="article" >
      <h3 className="author-article">{props.author}</h3>
      <p className="excerpt-article">{props.excerpt}...</p>


      <Link to={props.id}>View Detail</Link>

    </article >

  )
}

export default Article;