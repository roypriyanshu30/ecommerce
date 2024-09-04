import { createContext ,useState} from "react";
export const DataContext=createContext(null);
const Dataprovider=({children})=>{
    const [account, setaccount]=useState('');
    const [productsearch,setproductsearch]=useState();
    return(
        <DataContext.Provider value={{account,setaccount,productsearch,setproductsearch}}>
            {children}
        </DataContext.Provider>
    )
}
export default Dataprovider;