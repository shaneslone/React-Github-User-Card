import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GitHubCalendar from 'react-github-calendar';

export default class UserCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.user.avatar_url} alt='User Profile' />
        <p key={this.props.user.html_url}>
          <a href={this.props.user.html_url}>Github Profile</a>
        </p>
        <p key={this.props.user.login}>Username: {this.props.user.login}</p>
        <p key={this.props.user.name}>Name: {this.props.user.name}</p>
        <p key={this.props.user.location}>
          Location: {this.props.user.location}
        </p>
        <p key={this.props.user.bio}>Bio: {this.props.user.bio}</p>
        <p key={this.props.user.followers}>
          Follower Count: {this.props.user.followers}
        </p>
        <GitHubCalendar username={this.props.user.login} />
        <p>
          {this.props.pathway === '/' ? (
            <Link to='/followers'>See Follower List</Link>
          ) : (
            <Link to='/'>Hide Follower List</Link>
          )}
        </p>
      </div>
    );
  }
}
