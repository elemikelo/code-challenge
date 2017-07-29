import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';
import './app.css'

// Components
import Header from '../Header'
import Footer from '../Footer'
import ArticleList from '../ArticleList'

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }


  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList articles={this.state.articles} />
        <Footer />
      </div>
    );
  }
}

export default App;
