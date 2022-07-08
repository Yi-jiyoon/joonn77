import React from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Box } from '@material-ui/core';

function JoinBox(props){
    let openLink = () =>{
        let pageURL = 'http://www.naver.com'
        document.href = pageURL
    }

    return(
        <Box sx={{m:3}}>
            <Stack>
                <Button variant="contained" sx={{ my:1 }}>{props.login}</Button>
                <Button variant="contained" 
                href="javascript:void(0)"
                onClick={()=> window.open([openLink], '_blank')}>{props.sign_in}</Button>
            </Stack>
        </Box>
    )
}

export default JoinBox;