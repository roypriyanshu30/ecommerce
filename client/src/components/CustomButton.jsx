import {Box,Button,Typography,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from '../login/loginDialog';
import { DataContext } from '../context/Dtaprovider';
import {useState,useContext} from 'react';
const Wrapper=styled(Box)`
display:flex;
padding:10px;`
const Cont=styled(Typography)`
margin-left:20px;
padding:6px 11px;`
const Cart=styled(Box)`
margin-left:15px;
padding:5px;`
const Typo=styled(Typography)`
margin-left:0px;
padding:5px;`
const CustomButton = () => {
    const [open, setopen]=useState(false);
    const {account}=useContext(DataContext);
    const  openDialog=()=>{
        setopen(true);
    }
    return(
        <Wrapper>
         {account ? <Typography>{account}</Typography>:
         <Button style={{color:'blue',background:'white'}} variant='contained' onClick={openDialog}>login</Button>}
         
         <Cont>Become a seller</Cont>
         
         <Cart>
         <ShoppingCart/>
         </Cart>
         <Typo>Cart</Typo>
         <LoginDialog open={open} setopen={setopen}/>
         
         </Wrapper>
    )
}
export default CustomButton;