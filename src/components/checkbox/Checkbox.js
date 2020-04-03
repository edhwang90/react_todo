import React from 'react';

import './Checkbox.scss';

export const Checkbox = (props) => {
  const { id, label, toggleProp, handleToggle } = props;

  return (
    <React.Fragment>
      <input className="checkbox" type="checkbox" 
      checked={toggleProp} 
      id={'checkbox' + id} 
      onChange={handleToggle}
      />
      <label htmlFor={'checkbox' + id}><span>{label}</span></label>
    </React.Fragment>
  )
}