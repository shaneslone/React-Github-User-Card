import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';

import UserCard from './components/UserCard';
import Followers from './components/Followers';
import { StyledApp } from './styles/Styles';

class App extends Component {
  state = {
    userInfo: {},
    userFollowers: [],
    value: '',
    error: null,
  };

  componentDidMount() {
    this.fetchData('shaneslone', false);
    this.fetchData('shaneslone/followers', true);
  }

  fetchData = (user, followers) => {
    // followers is a boolean telling the function where to store the restult of the axios request
    axios
      .get(` https://api.github.com/users/${user}`)
      .then(res => {
        if (!followers) {
          this.setState({ userInfo: res.data, error: null });
        } else if (followers) {
          this.setState({
            userFollowers: res.data,
          });
        }
        console.log(this.state.nextPage);
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: 'User not found!' });
      });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchData(this.state.value, false);
    this.fetchData(`${this.state.value}/followers`, true);
    this.props.history.push('/');
  };

  render() {
    return (
      <StyledApp>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter a Github Username'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>

        <p>{this.state.error}</p>
        <Switch>
          <Route path='/followers'>
            <UserCard
              user={this.state.userInfo}
              pathway={this.props.location.pathname}
            />
            <Followers
              followers={this.state.userFollowers}
              getUser={this.fetchData}
            />
          </Route>
          <Route exact path='/'>
            <UserCard
              user={this.state.userInfo}
              pathway={this.props.location.pathname}
            />
          </Route>
        </Switch>
      </StyledApp>
    );
  }
}

export default withRouter(App);
