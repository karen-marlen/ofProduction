import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, type }) => {
    <button
        className={classNames('button', {
            [`type-${type}`]: type,
        })}
    >
        { children }
    </button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
};

Button.defaultProps = {
    type: 'primary'
}

export default Button;