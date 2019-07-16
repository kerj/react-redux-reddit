import React, { Component } from 'react';
import PostList from './components/PostList';
import { Switch, Route, withRouter } from 'react-router-dom';
// import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewPostForm from './components/NewPostForm';
import Nav from './components/Nav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProp: null
    };

  }

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' render={() => <PostList masterPostList = {this.props.masterPostList} />}/>
          <Route exact path='/newpost' component={NewPostForm}/>
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  masterPostList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

export default connect(mapStateToProps)(App);

