import { NavItem } from "components/AuthNav/AuthNav.styled";
import { Box } from "components/Box";
import { FcMultipleSmartphones, FcDown } from "react-icons/fc";

const HomePage = () => {
  return (
    <Box p={7} display="flex" flexDirection='column' alignItems='center'>
      <Box >
        <FcMultipleSmartphones size='75px' />
      </Box>
      
      <Box as="p" fontSize="l" textAlign='center' p={3}>
        Welcome, here you can create own account with contact book. Also you will be able to remove any contact.
        If your phonebook is huge, you can search by name. Good luck!
      </Box>
      <FcDown size='75px' />
      <Box p={4} fontSize="l" >
        <NavItem to="/register">Create an account</NavItem>
      </Box>
    </Box>
  );
};

export default HomePage;

