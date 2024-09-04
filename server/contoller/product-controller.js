import Product from "../model/product-schema.js";
export const productsearch=async (request,response)=>{
    try{
      const product=request.body;
      const details=await Product.find({'title.shortTitle':product.productname});
      if(details){
      return response.status(200).json({message:details});
      }
    }catch(error){
      console.log('error');
    }
}