import React from 'react';
import classes from './HistoryItem.module.css';

const historyItem = (props) => {
return (
    <ul className={classes.HistoryItem}>
      {props.children}
    </ul>
  )
}


export default historyItem;