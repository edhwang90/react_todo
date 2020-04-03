import React from 'react';
import { Link } from '../router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import './todo.scss';

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
          <Link to="/Active">Active</Link>
        </li>
        <li>
          <Link to="/Completed">Completed</Link>
        </li>
      </ul>
    </nav>
  )
}