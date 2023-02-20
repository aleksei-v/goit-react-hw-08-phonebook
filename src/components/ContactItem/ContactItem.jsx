import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Notify } from "notiflix";
import Button from '@mui/material/Button';
import { ContactLi } from '../ContactList/ContactList.styled';
import { useDeleteContactMutation } from 'redux/contacts/slice';


export const ContactItem = ({ id, name, number }) => {

    const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

    useEffect(() => {
        if (isSuccess) {
            Notify.failure(`Contact was removed.`);
        };
    }, [isSuccess]);
    
    return (
        <ContactLi>
            <p>{name}: {number}</p>
            <Button variant="outlined"
                color="error"
                onClick={() => {deleteContact(id)}}
                disabled={isLoading}
            >
                {isLoading
                    ? <span>Removing</span>
                    : <span>Remove</span>
                }
            </Button>
        </ContactLi>
    )
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};