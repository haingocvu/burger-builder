import React from 'react'
import classes from './Button.module.scss';
import Proptypes from 'prop-types';

const Button = ({ onClick, btnType, children, ...props}) => (
    <button
        {...props}
        onClick={onClick}
        className={[classes.Button, classes[btnType]].join(' ')}
        >{children}
    </button>
);

Button.propTypes = {
    onClick: Proptypes.func,
    btnType: Proptypes.string
};

export default Button;