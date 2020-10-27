import React, { Component } from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';

export default class App extends Component {
  state = {
    userInfo: {},
    userFollowers: [],
    value: '',
    error: null,
  };

  componentDidMount() {
    this.fetchData('shaneslone', false);
    this.fetchData('shaneslone/followers', true);
    console.log(this.state.userFollowers);
  }

  fetchData = (user, followers) => {
    axios
      .get(` https://api.github.com/users/${user}`)
      .then(res => {
        if (!followers) {
          this.setState({ userInfo: res.data, error: null });
          console.log(this.state.userInfo);
        } else if (followers) {
          this.setState({ userFollowers: res.data });
          console.log(this.state.userFollowers);
        }
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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        <p>{this.state.error}</p>
        <UserCard
          user={this.state.userInfo}
          followers={this.state.userFollowers}
        />
      </div>
    );
  }
}
