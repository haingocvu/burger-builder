import React from 'react';
import classes from './NavigationItem.module.scss';
import Proptypes from 'prop-types';

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a
                className={props.active ? classes.active : null}
                href={props.link}>
                {props.children}
            </a>
        </li>
    )
}

NavigationItem.propTypes = {
    active: Proptypes.bool,
    link: Proptypes.string.isRequired
}

export default NavigationItem;