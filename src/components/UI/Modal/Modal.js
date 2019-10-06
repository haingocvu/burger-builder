import React, { memo } from 'react'
import classes from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const Modal = (props) => {

    return (
        <Aux>
            <Backdrop clicked={props.onDestroyModal} show={props.show} />
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className={classes.Modal}>
                {props.children}
            </div>
        </Aux>
    )
}

export default memo(Modal);