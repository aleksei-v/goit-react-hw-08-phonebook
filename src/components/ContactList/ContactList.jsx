import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { ContactOrder } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts/slice';
import { showCurrentContacts } from 'utils/getFilteredContacts';
import { useEffect } from 'react';
import { ContactItem } from '../ContactItem/ContactItem'


const ContactList = () => {
    const filter = useSelector(selectFilter);
    const { data, isLoading, error, refetch  } = useGetContactsQuery();
    console.log(data)
    useEffect(() => {
        refetch();
    }, [refetch]);
    
const currentContacts = showCurrentContacts(filter, data);

    return (
        <Box pl={6} pr={6}>
            <ContactOrder>
                {!isLoading && !error && currentContacts.map(((contact) => {
                    return (
                        <ContactItem key={contact.id} {...contact} />
                    )
                }))}
            </ContactOrder>
        </Box>)
};
    
export default ContactList;