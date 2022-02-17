import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './loginpage.css';

import { TextField, DefaultButton, Checkbox } from '@fluentui/react';

let navigate;

const loginButtonClick = () => {
    navigate("/home");
}

const LoginPage = ({ ...props }) => {
    navigate = useNavigate();

    return(
        <div id="login-page">
            <div id="login-form">
                <div id="input-fields">
                    <TextField label='User Name' required/>
                    <TextField label='Password' type='password' canRevealPassword revealPasswordAriaLabel='Show password'/>
                </div>
                <div>
                    <Checkbox label="Remember me" onChange={void(0)} />
                </div>
                <div>
                    <DefaultButton onClick={() =>loginButtonClick()}>Login</DefaultButton>
                </div>
            </div>
        </div>
    )
}

LoginPage.propTypes = {

};

export default LoginPage;