import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './loginpage.css';

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
                    <input type="text" name="username" placeholder="User Name"/>
                    <input type="password" name="userpassword" placeholder="Password"/>
                </div>
                <button type="submit" value="Submit" id="login-form-submit" onClick={loginButtonClick}>Login</button>
            </div>
        </div>
    )
}

LoginPage.propTypes = {

};

export default LoginPage;