import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
}

export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  getChildContext = () => {
    const { route } = this.state;
    return {
      route: route,
      linkHandler: this.handleLinkClick
    }
  }

  handleLinkClick = (route) => {
    this.setState({ route });
    window.history.pushState(null, '', route);
  }

  render () {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}