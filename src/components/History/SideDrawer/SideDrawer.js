import React from 'react';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Overflow}>
        {props.children}
      </div>
    </div>
  )
}


export default sideDrawer;