import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { LoginFormInputs, schema } from "./type";

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        if (data.username === 'admin' && data.password === 'password') {
            dispatch(login());

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Успешный вход!',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            navigate('/home');
        } else {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'login admin password password',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: '32px',
                    width: '300px',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    Вход в систему
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <TextField
                        {...register('username')}
                        label="Логин"
                        variant="outlined"
                        margin="normal"
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                    <TextField
                        {...register('password')}
                        type="password"
                        label="Пароль"
                        variant="outlined"
                        margin="normal"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#415A77',
                            borderRadius: '20px',
                            padding: '8px 20px',
                            textTransform: 'none',
                            ':hover': {
                                backgroundColor: '#1b2838',
                            },
                            marginTop: '16px',
                        }}
                    >
                        Войти
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginForm;
