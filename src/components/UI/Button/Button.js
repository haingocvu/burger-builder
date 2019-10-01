import React from 'react'
import classes from './Button.module.scss';
import Proptypes from 'prop-types';

const Button = (props) => (
    <button
        onClick={props.onClick}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        >{props.children}
    </button>
);

Button.propTypes = {
    onClick: Proptypes.func,
    btnType: Proptypes.string
};

export default Button;