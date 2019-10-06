import React from 'react';
import classes from './Backdrop.module.scss';
import Proptypes from 'prop-types';

const Backdrop = (props) => (
    props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div> : null
)

Backdrop.propTypes = {
    show: Proptypes.bool,
    clicked: Proptypes.func
}

export default Backdrop;