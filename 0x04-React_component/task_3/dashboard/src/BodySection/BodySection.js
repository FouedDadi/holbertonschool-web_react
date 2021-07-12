import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BodySection extends Component {
  render() {
    return (
      <div className='bodySection'>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    );
  }
}
BodySection.propTypes = {
  title: PropTypes.string,
};

export default BodySection;
