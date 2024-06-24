import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import DropDownMenu from '../Inputs/DropDownMenu';
import UploadFile from '../Inputs/UploadFile';
import FormProvider from '../Inputs/FormProvider';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthConfig/AuthProvider';
import SelectedGroup from '../Inputs/SelectedGroup';
import CheckBox from '../Inputs/CheckBox';
import { validateFields } from '../../utils/HelperFunctions/Validation';
import Message from '../Message/Message';

const resolver = async (values) => {
    const fields = ['email', 'password', 'fullname', 'country', 'gender', 'areaofinterest', 'profilephoto'];
    const responseError = validateFields(fields, values);
    return {
        values: values.email ? values : {},
        errors: responseError,
    };
};

export default function Form() {
    const methods = useForm({ resolver });
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectGender, SetSelectGender] = useState("");
    const [checkedItems, setCheckedItems] = useState("");
    const [country, setCountry] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = methods;
    console.log(methods,"methods")

    const isError = errors
    console.log(isError,"iserr")

    const onSubmit = handleSubmit(async (data) => {
        console.log(data, "data");
        try {
            setError('');
            navigate('/logout');
        } catch (error) {
            console.log(error, "error");
            setError('general', { type: 'manual', message: 'Invalid Credential' });
        }
    });

    return (
        <div className='signup'>
            <div className='signup-content'>
                <div className='signup-content-text'>Fill the form</div>
                <FormProvider methods={methods} onSubmit={onSubmit}>
                    <div className='signup-content-form'>
                        <div className="inputContainer">
                            <Box
                                component="div"
                                sx={{
                                    '& .MuiTextField-root': { margin: 0, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="fullname"
                                    label="Full Name"
                                    placeholder="Enter your Full Name"
                                    type="text"
                                    multiline
                                    required
                                    {...register("fullname")}
                                    className={`${errors.fullname && "input-error"}`}
                                />
                                {errors.fullname && <p className="errorMes">{errors.fullname.message}</p>}
                            </Box>
                        </div>
                        <div className='inputContainer'>
                            <Box
                                component="div"
                                sx={{
                                    '& .MuiTextField-root': { margin: 0, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    fullWidth
                                    id="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email id"
                                    margin="normal"
                                    {...register("email")}
                                    className={`${errors.email && "input-error"}`}
                                    required
                                />
                                {errors.email ? <p className="errorMes">{errors.email?.message}</p>:""}
                            </Box>
                        </div>
                        <div className='inputContainer'>
                            <Box
                                component="div"
                                sx={{
                                    '& .MuiTextField-root': { margin: 0, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Enter Password"
                                    margin="normal"
                                    {...register("password")}
                                    className={`${errors.password && "input-error"}`}
                                    required
                                />
                                {errors.password && <p className="errorMes">{errors.password?.message}</p>}
                            </Box>
                        </div>
                        <div>
                            <DropDownMenu
                                label="Country Name"
                                type="country"
                                required
                                {...register('country')}
                                value={country}
                                country={country}
                                setCountry={setCountry}
                            />
                        </div>
                        <div>
                            <SelectedGroup
                                type="gender"
                                label="Gender"
                                {...register('gender')}
                                value={selectGender}
                                selectGender={selectGender}
                                SetSelectGender={SetSelectGender}
                            />
                        </div>
                        <div className='signup-content-form-checkbox'>
                            <CheckBox
                                type="areaofinterest"
                                label={"Area of Interest"}
                                {...register('areaofinterest')}
                                value={checkedItems}
                                checkedItems={checkedItems}
                                setCheckedItems={setCheckedItems}
                            />
                        </div>
                        <div>
                            <UploadFile
                                type='profilephoto'
                                label="Upload Photo"
                                {...register('profilephoto')}
                                value={selectedFiles}
                                selectedFiles={selectedFiles}
                                setSelectedFiles={setSelectedFiles}
                            />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        type='submit'
                        size="large"
                        color="secondary"
                        className="loginBtn"
                        disabled={false}>
                        Save Changes
                    </Button>
                </FormProvider>
                <Message />
            </div>
        </div>
    )
}
