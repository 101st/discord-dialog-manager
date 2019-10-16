import React, { Component } from 'react';

import MainMenu from '../../menu/main';

class MainPage extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (<MainMenu />);
  }
}

export default MainPage;