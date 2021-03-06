import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import Proptypes from 'prop-types';

const SideDrawer = (props) => {

    const attachedClasses = [classes.SideDrawer];

    if (props.open) {
        attachedClasses.push(classes.Open)
    } else {
        attachedClasses.push(classes.Close)
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

SideDrawer.propTypes = {
    closed: Proptypes.func,
    open: Proptypes.bool
}

export default SideDrawer;