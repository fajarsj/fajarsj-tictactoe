import React from 'react';
import classes from './Square.module.css';

const square = (props) => {
  let attachedClasses = [classes.Square];
  if (props.active) {
    attachedClasses = [classes.Square, classes.Winner];
  }
  return (
    <button className={attachedClasses.join(' ')} onClick={props.onClick}>
      <span>{props.value}</span>
    </button>
  )
}


export default square;