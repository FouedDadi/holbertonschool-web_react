import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = function (prop) {
  return (
    <div className='bodySectionWithMargin'>
      <BodySection {...prop} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

export default BodySectionWithMarginBottom;
