import { Box } from "components/Box";
import { NavItem } from "./AuthNav.styled";

export const AuthNav = () => (
    <>
        <Box display="flex" gridGap={3}>
            <NavItem to='register'>Sign up</NavItem>
            <NavItem to='login'>Log in</NavItem>
        </Box>
    </>
);