import React, { Component } from 'react';

export default class Followers extends Component {
  render() {
    return (
      <div className='followers'>
        {this.props.followers.map(follower => {
          return (
            <div className='follower' key={follower.id}>
              <img src={follower.avatar_url} alt='Follower' />
              <p key={follower.login}>{follower.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
