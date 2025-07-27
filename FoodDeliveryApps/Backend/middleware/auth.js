import jwt from "jsonwebtoken";
import cartRouter from "../routes/cartRouter.js";

const authMiddleware = async (req, res, next) => {
const {token} = req.headers;
if(!token) {
    return res.json({success:false, message:"Not Authorized Login Again"});
}
try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body = req.body || {}; 
    req.body.userId = token_decode.id;
    next();
}
catch(err)     {
console.log(err)
res.json({success:false, message: "Error"})
}
}
export default authMiddleware;