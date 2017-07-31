import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';
import './app.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Components
import Header from '../Header/index';
import Footer from '../Footer/index';
import ArticleList from '../ArticleList/index';
import ArticleDetail from '../ArticleDetail/index';

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
        <Router>
          <div>
            <Route exact path="/" render={() => <ArticleList articles={this.state.articles} />} />
            <Route path="/:id" component={ArticleDetail} />
          </div>
        </Router>
        <Footer />
      </div>

    );
  }
}

export default App;;
