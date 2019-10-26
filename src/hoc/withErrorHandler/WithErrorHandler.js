import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.req = axios.interceptors.request.use(config => {
                this.setState({
                    error: null
                })
                return config
            })

            this.res = axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error
                })
                throw error;
            })
        }

        state = {
            error: null,
            isFirstLoad: true
        }

        onClosedModalHandler = () => {
            this.setState({
                error: null,
                isFirstLoad: false
            })
        }

        shouldComponentUpdate(nextProps, nextStates) {
            if (nextStates.error !== this.state.error) {
                return true;
            }
            return false
        }

        componentWillUnmount() {
            console.log('will unmount', this.req, this.res);
            axios.interceptors.request.eject(this.req);
            axios.interceptors.request.eject(this.res);
        }

        render() {
            const { error, isFirstLoad } = this.state;
            return (
                <Aux>
                    <Modal
                        onDestroyModal={this.onClosedModalHandler}
                        show={error && isFirstLoad ? true : false}>
                        {error ? error.message : null}
                    </Modal>
                    {!error ? <WrappedComponent  {...this.props} /> : <div>Error occured!</div>}
                </Aux>
            )
        }
    }
}

export default withErrorHandler;