import React, { Component } from 'react';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
}

export const RouterContext = React.createContext({
  route: getCurrentPath(),
  linkHandler: () => {}
});

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

  handleLinkClick = (route) => {
    this.setState({ route });
    window.history.pushState(null, '', route);
  }

  render () {
    const { children } = this.props;
    const { route } = this.state;

    const initialContext = {
      route: route,
      linkHandler: this.handleLinkClick
    }

    return (
      <RouterContext.Provider value={initialContext}>
        {children}
      </RouterContext.Provider>
    )
  }
}

