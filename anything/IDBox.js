import React from 'react';
import { Input, TextField, Typography, Container } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@material-ui/core';

function IDBox(){
    return(
        <Box sx={{m:3}}>
        <Stack>
            <Input placeholder='아이디'></Input>
            <Input placeholder='패스워드' type='password'></Input>
        </Stack>
    </Box>

    )
}

export default IDBox;