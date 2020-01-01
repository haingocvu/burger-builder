import React from 'react';
import classes from './NavigationItem.module.scss';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                activeClassName={classes.active}
                exact
                to={props.link}>
                {props.children}
            </NavLink>
        </li>
    )
}

NavigationItem.propTypes = {
    active: Proptypes.bool,
    link: Proptypes.string.isRequired
}

export default NavigationItem;