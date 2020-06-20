import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {
  let attachedClasses = [classes.Modal];
  if (props.show) {
    attachedClasses = [classes.Modal, classes.Show];
  }

  return (
    <div className={attachedClasses.join(' ')}>
      {props.children}
    </div>
  )
};

export default modal;