import  express from "express";
import Proute  from "./products.mjs"
const apiRoutes=express.Router();
apiRoutes.use('/products',Proute)
export default apiRoutes
