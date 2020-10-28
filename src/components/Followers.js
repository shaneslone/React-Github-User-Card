import React, { Component } from 'react';

export default class Followers extends Component {
  handleClick = event => {
    this.props.getAllData(event.target.id);
  };
  render() {
    return (
      <div className='followers'>
        {this.props.followers.map(follower => {
          return (
            <div className='follower' key={follower.id}>
              <img src={follower.avatar_url} alt='Follower' />
              <h2
                key={follower.login}
                id={follower.login}
                onClick={this.handleClick}
              >
                {follower.login}
              </h2>
            </div>
          );
        })}
      </div>
    );
  }
}
