import { Dialog ,TextField,Box,Typography,Button,styled} from '@mui/material';
import { useState,useContext} from 'react';
import { authenticatesignup } from '../service/api';
import { DataContext } from '../context/Dtaprovider';
import { authenticatelogin } from '../service/api';
const Component=styled(Box)`
height: 70vh;
display:flex;`;
const Image=styled(Box)`
height:100%;
background:#2874f0;
width:60%;`;
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px`;
const LoginButton=styled(Button)`
background:#fb641b;
color:#fff;
width:100%;
margin-left:5px;
margin-top:15px;`;
const Createaccount=styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
cursor:pointer;
margin-top:20px;`;



const accountinitialvalues={
  login:{
    view:'login'
  },
  signup:{
    view:'signup'
  }
  }
  const logindetails={
    email:'',
    passwords:''
  }
const LoginDialog=({open,setopen})=>{
  const signupinitialvalues = {
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
    phoneno: ''
  }
   
  const [account,toogleaccount]= useState(accountinitialvalues.login);
  const  [ signup, setSignup ]= useState(signupinitialvalues);
  const [login,setlogin]=useState(logindetails);
  const {setaccount}=useContext(DataContext);
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png';



const toggleaccount=()=>{
toogleaccount(accountinitialvalues.signup);

}
const onInputchange = (e) => {
   setSignup({...signup,[e.target.name]: e.target.value});
   console.log(signup);
   
}
const handleclose = () => {
  setopen(false);
  toogleaccount(accountinitialvalues.login);
}
const signupuser=async ()=>{
 let response=await authenticatesignup(signup);
 console.log(response);
 if(!response) return;
 handleclose();
 setaccount(signup.username);
}
const onValuechange=(e)=>{
  setlogin({...login,[e.target.name]:e.target.value});
  
}
const loginuser=async ()=>{
let response=await authenticatelogin(login);
if(response.status===200){
  setaccount(response.data.message.username);
  handleclose();
}
}

    return(
    <Dialog open={open} onClose={handleclose}>
      <Component >
      <Image>
        
        <img style={{width:'60%',marginTop:'100px',marginLeft:'1px',height:'50%',width:'100%'}}src={fassured} alt="logo"/>
        
      </Image>
      { account.view ==='login'?
        <Wrapper>
            <TextField variant="standard" onChange={(e) => onValuechange(e)} name="email" label="Enter the Email" />
            <TextField style={{}}variant="standard" onChange={(e) => onValuechange(e)} name="passwords" label="Enter the Password"/>
            <Typography style={{paddingTop:'30px'}}>By continuing, you agree to Flipkart's Terms of use and privacy Policy</Typography>
            <LoginButton onClick={loginuser}>Login</LoginButton>
            <Typography style={{textAlign:'center',marginTop:'20px'}}>OR</Typography>
            <Button style={{background:'#fff',boxShadow:'0 1px 2px 0 rgba(0,0,0,.2)'}}>Request OTP</Button>
            <Createaccount onClick={()=>toggleaccount()}>How to Flipkart? Create an account</Createaccount>
        </Wrapper>
        :
        <Wrapper>
            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='email' label="Enter the Email"   />
            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='username' label="Enter the Username"/>
            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='password' label="Enter the Password"/>
            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='confirmpassword' label="Confirm the Password"/>
            <TextField variant="standard" onChange={(e) => onInputchange(e)} name='phoneno' label="Enter the phoneno"/>
            <LoginButton onClick={signupuser}>Sign</LoginButton>
            
            
        </Wrapper>
  }
      </Component>
    </Dialog>
    )
}
export default LoginDialog;