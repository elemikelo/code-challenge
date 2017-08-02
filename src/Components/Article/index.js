import React from 'react';
import './article.css';
import { Link } from 'react-router-dom';

const Article = (props) => (
  <article className="article">
    <button className="button-delete" onClick={props.eventDeteleArticle}><i className="fa fa-trash-o"></i></button>
    <h3 className="author-article">{props.author}</h3>
    <p className="excerpt-article">{props.excerpt}...</p>
    <Link to={props.id}>View Detail</Link>
  </article >
)

export default Article;

