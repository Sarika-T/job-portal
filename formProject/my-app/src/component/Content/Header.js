import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormProvider from '../Inputs/FormProvider';
import { logout, useAuth } from '../../utils/AuthConfig/AuthProvider';
import './Header.scss';
import { auth } from '../../utils/AuthConfig/AuthConfig';

export default function Header() {
    const methods = useForm();
    const {logout} = useAuth();
    const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    formState: { errors },setError
    } = methods;
    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        logout();
        navigate("/login");
    })


    return (
        <div className='header'>
            <div className='header-container'>
            <FormProvider methods={methods} onSubmit={(onSubmit)}>
                <div className='header-container-main'>
                    <div className='header-container-main-button'>
                        <Button
                            variant="contained"
                            type='submit'
                            size="large"
                            color="secondary"
                            className="logoutBtn"
                            disabled={false}>
                            Logout
                        </Button>
                    </div>
                </div>
            </FormProvider>
            </div>
        </div>
      )

}