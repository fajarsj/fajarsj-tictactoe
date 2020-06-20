import React, { Component } from 'react';
import classes from './Layout.module.css';
import History from '../../components/History/History';

class Layout extends Component {
  state = {
    showHistory: false
  }

  historyClosedHandler = () => {
    this.setState({showHistory: false});
  }

  historyToggleHandler = () => {
    this.setState((prevState) => {
      return (
        {showHistory: !prevState.showHistory}
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.Game}>
          {this.props.children}
        </div>
        <History
          toggleHistory={this.historyToggleHandler}
          open={this.state.showHistory}
          closed={this.HistoryHandler}  
        >
          {this.props.moves}
        </History>
      </React.Fragment>
    )
  }
}

export default Layout;