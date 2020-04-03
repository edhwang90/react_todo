import React, { Component } from 'react';

export class Link extends Component {
  render () {
    const { children } = this.props;
    
    return <a href="#">{children}</a>
  }
}