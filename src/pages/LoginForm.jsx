import { Box } from "components/Box"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from "hooks/useAuth";
import Loader from "../components/Loaders/AuthLoader"

const LoginForm = () => {
    const { isLoading, error } = useAuth();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        // const { name, value } = e.target;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({ email, password }))
        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };
    
    return (
        <Box p={6}>
            <Typography variant='h2' align='center'>Login</Typography>
            {!error && isLoading && <Loader />}
            <Box
                as="form"
                onSubmit={handleSubmit}
                display="flex"
                flexDirection="column"
                p={4}
                alignItems="center"
            >
                <TextField margin="normal" label="Your email" variant="standard" type="email" name="email" value={email} onChange={handleChange} required />
                <TextField margin="normal" label="Your password" variant="standard" type="password" name="password" value={password} onChange={handleChange} required />
                <Button variant="contained" type="submit">Log in</Button>
            </Box>
        </Box>
    );
};

export default LoginForm;