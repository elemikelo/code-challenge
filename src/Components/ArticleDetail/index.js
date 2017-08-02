import React, { Component } from 'react';
import './ArticleDetail.css';
import NotFound from '../404';

import request from '../../request';
import { ARTICLE_QUERY } from '../../queries';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLE_QUERY(this.props.match.params.id)).then(response => {
      this.setState({ article: response.data.article });
    });
  }

  render() {

    if (this.state.article == null) {
      return (
        <NotFound />
      )
    }
    else {
      const { author } = this.state.article;
      const { content } = this.state.article;
      const { tags } = this.state.article;

      return (
        <article className="article-detail" >
          <h2 className="author-detail">{author}</h2>
          <div className="text-detail"> {content} </div>
          <div className="tag-detail">
            <strong>Tags</strong>
            {
              tags ? tags.map(tag => <div className="tag-item">{tag} </div>) : <div />
            }
          </div>
        </article >
      );
    }
  }
}



export default ArticleDetail;