import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect, useState } from "react";
import { Box } from 'components/Box';
import { useGetContactsQuery, useCreateContactMutation } from 'redux/contacts/slice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContactLoader from '../Loaders/ContactLoader'

const ContactForm = () => {

    const [createContact, { isLoading, isSuccess}] = useCreateContactMutation();
    const { data: contacts } = useGetContactsQuery();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value)
                break;
        
            case "number":
                setNumber(value)
                break;
            default:
                return;
        }
    };

    const onSubmitContact = ({ name, number }) => {       
        contacts.some(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())
            ? Notify.failure(`${name} is already in contacts`)
            : createContact({ name, number }) && resetForm();
    };


    const onClickSubmit = (evt) => {
        evt.preventDefault();
        
        onSubmitContact({ name, number });
    };

    const resetForm = () => {
        setName("");
        setNumber("");
    };
  
    useEffect(() => {
        if (isSuccess) {
        Notify.success(`Contact was created.`);
        };
    }, [isSuccess]);

    return (
        <>
                <Box
                    as="form"
                    onSubmit={onClickSubmit}
                    display="flex"
                    flexDirection="column"
                    p={4}
                    alignItems="center"
                >
              
                <TextField 
                    margin="normal"
                    label="Contact's name"
                    title="Name may contain only letters, apostrophe, dash and spaces.
                                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    variant="standard"
                    type="name"
                    name="name"
                    value={name} onChange={handleInputChange}
                    required /> 
              
                <TextField 
                    margin="normal"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    label="Contact's number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    variant="standard"
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                    required />
              
                <Button variant="contained" type="submit">Add contact</Button>
                {isLoading && <ContactLoader/>}
                    </Box>
        </>
    );
};

export default ContactForm;


