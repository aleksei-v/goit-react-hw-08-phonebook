import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { Box } from "./Box";

import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from "hooks/useAuth";
import Loader from "./Loaders/AuthLoader"


export const UserMenu = () => {
    const { isLoading, error, userName } = useAuth();

    const dispatch = useDispatch()
    const signOut = () => {
        dispatch(logOut());
        Notify.info("You have logged out");
    };
    return (
        <>
            <Box display="flex" alignItems="center" gridGap={2}>
                <AccountCircleIcon color="primary"/>
                <Box as='p' fontSize="18px">Welcome, {userName}</Box>
                <IconButton onClick={signOut}>
                    <LogoutIcon />
                </IconButton>
                {!error && isLoading && <Loader/>}
            </Box>
        </>
    )
};