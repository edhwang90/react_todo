import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RouterContext } from './Router';

export class Link extends Component {
  static contextType = RouterContext;

  handleClick = (e) => {
    e.preventDefault();
    const { to } = this.props;

    this.context.linkHandler(to);
  }

  render () {
    const { children, to } = this.props;
    const activeClass = this.context.route === to ? 'active' : '';

    return (
        <a href="#" className={activeClass} onClick={this.handleClick}>{children}</a>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}