// src/App.js

import React, { Component } from 'react'
import { connect } from 'react-redux'
import api from 'feathersjs-redux-model/build/middleware/api'

import Loader from './components/Loader'
import SignInOrUp from './containers/SignInOrUp'
import Lobby from './containers/Lobby'
import removeCurrentUser from './actions/remove-current-user'

class App extends Component {
  signOutUser() {
    this.props.removeCurrentUser()
    api.signOut()
  }

  render() {
    const { loading, userSignedIn, username } = this.props

    return (
      <div className="main">
        <Loader loading={ loading } />
        <h1>Memory Game</h1>
        { userSignedIn ?
          <div>
            <p>Hi { username }</p>
            <button onClick={this.signOutUser.bind(this)}>Sign out</button>
            <Lobby />
          </div>
            : <SignInOrUp /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    userSignedIn: state.currentUser ? true : false,
    username: state.currentUser && state.currentUser.name,
  }
}

export default connect(mapStateToProps, { removeCurrentUser })(App)
