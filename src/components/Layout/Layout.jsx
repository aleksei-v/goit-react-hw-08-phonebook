import { Box } from "components/Box";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu";
import { NavItem } from "../AuthNav/AuthNav.styled";
import CustomOutlet from '../../utils/Outlet';
import { useAuth } from 'hooks/useAuth';

const Layout = () => {
    const { isUserLogin } = useAuth();

    return (
        <Box>
            <Box as='header'
                display='flex'
                alingItems="center"
                justifyContent='space-around'
            >
                <Box as="nav" display="flex" gridGap={3}>
                    {!isUserLogin && <NavItem to='home'>Home</NavItem>}
                    <NavItem to='contacts'>Your contacts</NavItem>
                </Box>
                {isUserLogin
                    ? <UserMenu />
                    : <AuthNav />
                }
            </Box>
            <CustomOutlet />
        </Box>
        
    );
};

export default Layout;