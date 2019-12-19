import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';
import PropTypes from 'prop-types';
import http from '../../../services/http';
import Spinner from '../../../components/UI/Spinner/Spinner';

const ContactData = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    });

    const orderHandler = (e) => {
        e.preventDefault();
        setState({
            ...state,
            loading: true,
        })
        const order = {
            ingredients: props.ingredients,
            totalPrice: props.totalPrice,
        }
        http.post('/orders.json', order)
            .then(res => {
                setState({
                    ...state,
                    loading: false,
                    purchasing: false,
                })
                props.history.push('/');
            })
            .catch(err => {
                setState({
                    ...state,
                    loading: false,
                    purchasing: false,
                })
            })
    }
    let form = (
        <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" onClick={orderHandler}>ORDER</Button>
        </form>
    )

    if (state.loading) {
        form = <Spinner />
    }

        return (
            <div className={classes.ContactData}>
                <h4>
                    Enter your contact data
                </h4>
                {form}
            </div>
        )
}

ContactData.propTypes = {
    ingredients: PropTypes.object,
    totalPrice: PropTypes.number,
}

export default withRouter(ContactData);