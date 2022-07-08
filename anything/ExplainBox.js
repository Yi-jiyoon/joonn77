import React from 'react';
import { Input, TextField, Typography, Container } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@material-ui/core';

function ExplainBox(){
    return(
        <Box sx={{m:3, mt:20, mb:35}}>
            <Stack>
                <Typography align='center' variant='h5' marginRight={2}>OO로 공부 중인 학생 수</Typography>
                <Typography align='center' variant='h4'>123,456,678</Typography>
            </Stack>
        </Box>
    )
}

export default ExplainBox;