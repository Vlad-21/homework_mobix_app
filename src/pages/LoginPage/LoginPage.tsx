import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {ILogin} from "../../interfaces/login.interface";
import {setUser} from "../../services/auth.servece";
import {IProps, IValidError} from "./LoginPage.interface";

import './LoginPage.css';
import StoreContext from "../../services/context";

const LoginPage: React.FC<IProps> = ({isLogin, changeLogin}) => {
    const [formData, setFormData] = useState<ILogin>({
        name: '',
        password: '',
    });
    const [errors, setErrors] = useState<IValidError>({
        name: '',
        password: '',
    });

    const navigation = useNavigate();
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    useEffect(() => {
        if (isLogin) {
            navigation('/');
        }
    })

    const validationForm = (form: ILogin): IValidError => {
        const errors: IValidError = {
            name: '',
            password: '',
        }
        if (!form.name) {
            errors.name = 'Name is required';
        }
        if (!form.password) {
            errors.password = 'Password is required';
        }
        return errors;
    }
    const handleSubmitClick = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const error = validationForm(formData);
        if (error.name || error.password) {
            setErrors(error);
        } else {
            setUser(formData);
            changeLogin(true);
            navigation('/');
        };
    }
    return (
        <div className="p-login-page">
            <div className="p-login-container">
                <h1>Login</h1>
                <form className="p-login-form" onSubmit={handleSubmitClick}>
                    <label>Login:</label>
                    <input
                        style={{borderColor: errors.name ? "red" : "black"}}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleOnChange}
                        className="p-login-input"
                    />
                    {errors.name && <div className="p-login-error-message">{errors.name}</div>}
                    <label>Password:</label>
                    <input
                        style={{borderColor: errors.name ? "red" : "black"}}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        className="p-login-input"
                    />
                    {errors.password && <div className="p-login-error-message">{errors.password}</div>}
                    <input
                        type="submit"
                        className="p-login-submit"
                        value="Увійти"
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;