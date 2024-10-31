import * as yup from "yup";

export interface LoginFormInputs {
    username: string;
    password: string;
}

export const schema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be at least 5 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required'),
});
