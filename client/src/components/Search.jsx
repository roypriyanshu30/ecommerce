import {InputBase,Box,styled} from '@mui/material';
import { productenquiry } from '../service/api';
import SearchIcon from '@mui/icons-material/Search';
import { useState,useContext} from 'react';
import { DataContext } from '../context/Dtaprovider';
const Component=styled(Box)`
margin-left:20px;
background-color:white;
width:50%;
border-radius:2px;
display:flex;
`
const InputBase1=styled(InputBase)`
width:100%;
padding-left:20px`
const SearchBox=styled(Box)`
color: blue;
padding:5px;`
const product={
  productname:''
}
const Search = () => {
    const {setproductsearch}=useContext(DataContext);
    const onbasechange=async (e)=>{
      product.productname=e.target.value;
      
    }
    const onvaluechange=async ()=>{
      let response=await productenquiry(product);
      
      setproductsearch(response.data.message);
      
    }
    return(
    <Component>
    
    <InputBase1 onChange={(e)=>onbasechange(e)}placeholder='Search for Products,Brands and More'/>
    <SearchBox>

    <SearchIcon onClick={onvaluechange}/>
    </SearchBox>
    
    </Component>
      )
}
export default Search;