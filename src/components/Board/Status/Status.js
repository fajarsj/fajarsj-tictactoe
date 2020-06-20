import React from 'react';
import classes from './Status.module.css';

const status = (props) => (
  <p className={classes.Status}>{props.status}</p>
)

export default status;