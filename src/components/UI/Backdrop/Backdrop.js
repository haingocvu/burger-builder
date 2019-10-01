import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = (props) => (
    props.show ? <div onClick={props.onDestroyModal} className={classes.Backdrop}></div> : null
)

export default Backdrop;