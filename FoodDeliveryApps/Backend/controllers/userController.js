import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";




//login user
const loginUser = async(req, res) => {

    try {
        const { email, password } = req.body;
    
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
          return res.status(400).json({ success: false, message: "User not found" });
        }
    
        //  Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
    
        // Create token
        const token = createToken(user._id);
        res.json({success:true, token})
      
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Login error" })
    };

}



const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
//register user 
const registerUser = async(req, res) => {
    try {
        const { name, email, password } = req.body;
    
        const existing = await userModel.findOne({ email });
        if (existing) {
          return res.status(400).json({ success: false, message: "User already exists" });
        }

        if(!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if(password.length<8) {
            return res.json({ success: false, message: "Please a strong password" });
        }

        //hashing user passwor
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
          name: name,
          email: email,
          password: hashedPassword,
        });
        await newUser.save();


        
        const token = createToken(newUser._id);
        res.status(201).json({
          success: true,
          message: "User registered successfully",
          token,
        })
    }
        
    catch (error) {
        console.error("❌ Registration Error:", error.message);
        res.status(500).json({ success: false, message: error.message });
      }
      
}
export {loginUser, registerUser}