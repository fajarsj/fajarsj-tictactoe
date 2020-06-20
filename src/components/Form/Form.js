import React from 'react';
import classes from './Form.module.css'
import Button from '../UI/Button/Button';

const form = (props) => (
  <div className={classes.Form}>
    <p>Change Board Size (3 - 20)</p> 
    <input type="number"  min="1" max="20" value={props.value} onChange={props.onChange}/>
    <div className={classes.FormButton}>
      <Button clicked={props.clickedApply}>Apply</Button>
      <Button clicked={props.clickedReset} btnType="danger">Reset</Button>
    </div>
  </div>
)

export default form;