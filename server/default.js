import { products,product1 } from './constants/data.js';
import Product from './model/product-schema.js';
const Defaultdata = async ()=>{
    try{
      const newproduct=new Product(product1);
      await newproduct.save();
     await Product.insertMany(products);
     
     
     console.log('data has been inserted');
    }catch(error){
      console.log('data not inserted',error.message);
    }
}
export default Defaultdata;