import React from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import HistoryItem from './HistoryItem/HistoryItem'
import classes from './History.module.css';
import arrow from '../../assets/arrow.png';

const History = (props) => {
  let attachedClasses = [classes.Circle, classes.ArrowClose];
  let attachedClassesHistory = [classes.History]
  if (props.open) {
    attachedClasses = [classes.Circle, classes.ArrowOpen];
    attachedClassesHistory = [classes.History, classes.HistoryOpen]
  }
  
  return (
    <React.Fragment>
      <div className={attachedClassesHistory.join(' ')} onClick={props.toggleHistory}>
        <span>{props.open ? 'Close' : 'Open'} Game History</span>
        <div className={attachedClasses.join(' ')}><img src={arrow} alt="arrow" /></div>
      </div>
      <SideDrawer open={props.open} closed={props.closed}>
        <HistoryItem>
          {props.children}
        </HistoryItem>
      </SideDrawer>
    </React.Fragment>
  )
}


export default History;