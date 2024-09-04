import express from 'express';
import { usersignup,userlogin} from '../contoller/user-controller.js';
import { productsearch } from '../contoller/product-controller.js';
const router=express.Router();
router.post('/signup',usersignup);
router.post('/login',userlogin);
router.post('/product',productsearch);
export default router;
