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
    const { props: { children, to }, context, handleClick } = this;
    const activeClass = context.route === to ? 'active' : '';

    return (
        <a href="#" className={activeClass} onClick={handleClick}>{children}</a>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}