import React, { Component } from 'react';

export default class UserCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.user.avatar_url} alt='User Profile Image' />
        <p key={this.props.user.url}>
          <a href={this.props.user.url}>Github Profile</a>
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

        {/* {this.props.followers.map(follower => {
          return <p key={follower.id}>{follower.login}</p>;
        })} */}
      </div>
    );
  }
}
