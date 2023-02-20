import { Box } from "components/Box"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from "hooks/useAuth";
import Loader from "../components/Loaders/AuthLoader"

const RegisterForm = () => {

    const { isLoading, error } = useAuth();
    
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        // const { name, value } = e.target;
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(register({ name, email, password }))
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }
    console.log(isLoading)
    return (
        <Box p={6}>
            <Typography variant='h2' align='center'>Regisration</Typography>
            {!error && isLoading && <Loader />}
            <Box
                as="form"
                onSubmit={handleSubmit}
                display="flex"
                flexDirection="column"
                p={4}
                alignItems="center"
            >
              
                <TextField margin="normal" label="Your name"
                    variant="standard" type="name" name="name" value={name} onChange={handleChange} required />
              
                <TextField margin="normal" label="Your email" variant="standard"
                    type="email" name="email" value={email} onChange={handleChange} required />
              
                <TextField margin="normal" label="Your password"
                    variant="standard" type="password" name="password" value={password} onChange={handleChange} required />
              
                <Button variant="contained" type="submit">Register</Button>

            </Box>

        </Box>
    )
};

export default RegisterForm;
