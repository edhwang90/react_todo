import React from 'react';
import { Link } from '../router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export const Header = () => {
  return (
    <nav className="app-nav">
      <ul className="routes">
        <li>
          <a href="/" className="active"><FontAwesomeIcon icon={faList} /></a>
        </li>
      </ul>

      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    </nav>
  )
}