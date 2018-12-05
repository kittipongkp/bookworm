import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from "../forms/LoginForm";


const propTypes = {
    
};


class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>LoginPage</h1>

                <LoginForm />
            </div>
        );
    }
}


LoginPage.propTypes = propTypes;


export default LoginPage;
