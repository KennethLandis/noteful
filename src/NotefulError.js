import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotefulError extends Component {
    constructor(props) {
        super(props);
        this.state ={
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return(
                <h2>Could not display this content at this time, please try again later.</h2>
            )
        }
        return this.props.children;
    }
}

export default NotefulError;

NotefulError.propTypes = {
    hasError: PropTypes.bool
}

