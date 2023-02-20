
import { Box } from 'components/Box';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import TextField from '@mui/material/TextField';

const Filter = () => {
    const dispatch = useDispatch();
    
    const handleInputName = (evt) => {
        dispatch(setFilter(evt.target.value))
    };
    const filter = useSelector(selectFilter)

    return (<Box
        display="flex"
        flexDirection="column"
        p={4}
        alignItems="center"
    >
        <label> 
            <TextField
                id="filled-basic" label="Find contacts by name" variant="filled"
                type="text"
                name="filter"
                value={filter}
                onChange={handleInputName}
            />
        </label>
    </Box>)
};


export default Filter;