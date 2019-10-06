import React, { useState } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.scss';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

    const [state, setState] = useState({
        showSideDrawer: false
    })

    const sideDrawerCloseHandler = () => {
        setState({
            showSideDrawer: false
        })
    }

    const toggleDrawerHandler = () => {
        setState((prevState) => {
            return {
                ...prevState,
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    return (
        <Aux>
            <Toolbar onToggleDrawer={toggleDrawerHandler}/>
            <SideDrawer open={state.showSideDrawer} closed={sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;