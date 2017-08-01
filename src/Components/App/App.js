import React, { Component } from 'react';
import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';
import './app.css';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';

// Components
import Header from '../Header/index';
import Footer from '../Footer/index';
import ArticleList from '../ArticleList/index';
import ArticleDetail from '../ArticleDetail/index';
import Form from '../Form/index';
import notFound from '../404/index';


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
      <Router history={browserHistory}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <ArticleList articles={this.state.articles} />} />
            <Route exact path="/article/new" component={Form} />
            <Route exact path="/:id" component={ArticleDetail} />
            <Route path="*" component={notFound} />
          </Switch>
          <Footer />
        </div >
      </Router>

    );
  }
}

export default App;;
