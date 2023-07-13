import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './SearchBar';
import RecentPosts from './recentPost';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}
