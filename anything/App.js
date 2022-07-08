import React from 'react';
import { Grid } from '@material-ui/core';
import ExplainBox from './components/ExplainBox';
import IDBox from './components/IDBox';
import JoinBox from './components/JoinBox';

function App() {
    return (
        <Grid
            container
            direction="column"
            alignItems="stretch">

            <ExplainBox></ExplainBox>
            <IDBox></IDBox>
            <JoinBox login="로그인" sign_in="회원가입"
            onChangeMode={function(){

            }}>
            </JoinBox>
        </Grid>
    
  )  
}
export default App;