import React, { useEffect, useState } from 'react'
import { AiFillAliwangwang } from "react-icons/ai";
import { Nav } from './Nav';
import jsontext from '../jsons/TextApp.json'
import '../jsons/Design.css'
import Button from '@mui/material/Button'
import AnchorTemporaryDrawer from './AnchorTemporaryDrawer';
import NavOrNot from './NavOrNot';
import { useNavigate } from 'react-router-dom';
const AppHandler = () => {
 const navigate = useNavigate();
  return (<>
    <NavOrNot />
    <div id='header1'>
     <AiFillAliwangwang style={{fontSize: 100, textAlign: 'center', color: 'black'}}/>
     <h1 id='p11'>{jsontext.MainApp.resetpromp}</h1>
     <Button id='btn-change' onClick={()=>{navigate('initial_reset')}} variant="outlined" size="small">
       {jsontext.MainApp.change_password}
     </Button>
     <div id='joebottom'>
       {jsontext.MainApp.joebanezair} <br/>
       <a>{jsontext.MainApp.clickthelink}</a>
     </div>
    </div>
  </>)
}

export default AppHandler