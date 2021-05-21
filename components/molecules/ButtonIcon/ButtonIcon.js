import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';


const ButtonIcon = ({ children, type, icon }) => {
   return (
       <Button
            type={ type }
        
        >
           { children }
         <Icon 
         
         />
       </Button>
   ) 
}

ButtonIcon.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.oneOf(options.icons),
    type: PropTypes.oneOf(options.types),
};

ButtonIcon.defaultProps = {
    type: 'secondary',
    icon: 'arrowRight',
  }

export default ButtonIcon;

