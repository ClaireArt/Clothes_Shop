import { Formik } from 'formik';
import React, { memo } from 'react';
import * as yup from 'yup';
import './Login_Form.css';
import { useNavigate } from 'react-router-dom';
import { useGetAdminQuery } from '../store/storeSlices/productSlice/newProductApi';

function Login_Form({ setActiveAdmin }) {
    const navigate = useNavigate();
    const { data = [], isError, isLoading } = useGetAdminQuery();

    const validationSchema = yup.object().shape({
        name: yup.string().required('Պարտադիր դաշտ'),
        password: yup.string().required('Պարտադիր դաշտ'),

    })

    const handleRegister = (e, handleSubmit, isValid) => {
        e.preventDefault();
        handleSubmit();

        if (e.target[0].value === data[0].login && e.target[1].value === data[0].password) {
            navigate('/auth/admin');
            setActiveAdmin(true);
        }
    }

    return (
        <div className='form'>
            <Formik
                initialValues={{
                    name: '',
                    password: ''
                }}

                onSubmit={(values, { resetForm }) => {

                    resetForm()
                }}

                validateOnBlur

                validationSchema={validationSchema}>

                {
                    ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <form className="login-form" onSubmit={(e) => handleRegister(e, handleSubmit, isValid)}>
                            <div className="input-container">
                                <input type="text" className="username" placeholder="Admin Login" autoComplete='off' onChange={handleChange} onBlur={handleBlur} name="name" />
                                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                            </div>
                            <div className="input-container">
                                <input type="password" className="password" placeholder="Admin Password" autoComplete='off' onChange={handleChange} onBlur={handleBlur} name="password" />
                                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            <button>Login →</button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default memo(Login_Form)