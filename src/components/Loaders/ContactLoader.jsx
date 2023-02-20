import { MutatingDots  } from 'react-loader-spinner';
import { Box } from "../Box";

const ContactLoader = () => {
    return (
        <Box
              position="absolute"
              top="50%"
              left="47%"
          >
         <MutatingDots 
            height="100"
            width="100"
            color="#3f51b5"
            secondaryColor= '#3f51b5'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </Box>

    )
}

export default ContactLoader