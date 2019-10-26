import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = () => (
    <div className={classes.Loader}><div></div><div></div><div></div><div></div></div>
);

export default Spinner;