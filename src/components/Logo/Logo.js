import React from 'react';
import burgerLogoUrl from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogoUrl} alt="Burger Logo" />
        </div>
    )
}

export default Logo;