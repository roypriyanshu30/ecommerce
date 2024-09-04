import { AppBar,Toolbar,Box,styled,Typography,List,ListItem,ListItemText} from '@mui/material';
import Search from "./Search";
import CustomButton from './CustomButton';
import { useContext } from 'react';
import { DataContext } from '../context/Dtaprovider';
const Component=styled(Box)`
margin-left:100px`
const Wrapper=styled(Box)`
margin-top:70px;
height:200px;

margin-left:40px;
display:flex;
`
const SubHeading=styled(Typography)`
font-size:10px`;
const Cont=styled(Box)`
display:flex;

padding:10px;
`
const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
const Header = ()=>{
   const {productsearch}=useContext(DataContext);
   
   if(!productsearch){
    return(
        
        <AppBar>
        <Toolbar>
        <Component>
          <img src={logoURL} alt="logo" style={{width:75}}/>
          <Box style={{display:'flex'}}>
          <SubHeading>explore&nbsp;</SubHeading>
          <Typography style={{fontSize:10,color:'yellow'}}>Plus</Typography>
          <img src={subURL} alt="logo" style={{width:10}}></img>
          </Box>
          
        </Component>
        <Search/>
        <CustomButton/>
        </Toolbar>
        </AppBar>
    )
       }
       else{
         return(
          <>
          <AppBar>
          <Toolbar>
          <Component>
            <img src={logoURL} alt="logo" style={{width:75}}/>
            <Box style={{display:'flex'}}>
            <SubHeading>explore&nbsp;</SubHeading>
            <Typography style={{fontSize:10,color:'yellow'}}>Plus</Typography>
            <img src={subURL} alt="logo" style={{width:10}}></img>
            
            </Box>
            
          </Component>
          <Search/>
          <CustomButton/>
          </Toolbar>
          </AppBar>
          
          {
            productsearch.map((imageurl, index) => (
              <Wrapper>
              <img style={{height:'90%',width:'180px'}}key={index} src={imageurl.url}></img>
              <Cont>
              
              
              <List>
                <ListItemText primary={imageurl.title.longTitle}></ListItemText>
                <ListItemText primary={imageurl.discount}></ListItemText>
                <ListItemText primary={imageurl.price.cost}></ListItemText>
              </List>
              
              <Box style={{marginTop:'14px',marginLeft:'300px'}}>
              <Typography style={{}}>{imageurl.price.mrp}</Typography>
              </Box>
              </Cont>
              
              
              
              </Wrapper>
       ))
          }
          
          
           </>
         )
       }
       
    
}
export default Header;