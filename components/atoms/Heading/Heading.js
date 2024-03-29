import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Heading.css';

const Heading = ({ children }) => {
    <heading className={classNames('heading', {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        
    })}
    >
        { children }
    </heading>
}

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf['primary'],
    size: PropTypes.oneOf[('xs', 'sm', 'md')],
}

Heading.defaultProps = {
    color: 'default',
    size: 'md',
}

export default Heading;