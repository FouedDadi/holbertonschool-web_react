import React, { Component } from 'react';

function WithLogging(WC) {
  class HOC extends Component {
    componentDidMount() {
      console.log(`Component ${WC.displayName} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${WC.displayName} is going to unmount`);
    }
    render() {
      return <WC {...this.props} />;
    }
  }
  this.displayName = `WithLogging(${WC.displayName || 'Component'})`;
  return HOC;
}

export default WithLogging;
