const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn : '3d' })        //_id:_id is payload, so we are only writing _id
}


//login user
const loginUser = async (req,res) => {
    
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);

        //creating a token using the function we created
        const token = createToken(user._id);

        res.status(200).json({ email, user, token });
    }
    catch(error){
        res.status(400).json({ error : error.message });
    }

}


//signup user
const signupUser = async (req,res) => {   //when we will do /signup req post, this will get executed as this is post req handler
    
    const {fname, email, phoneNumber, collegeName, stream, year, password} = req.body;

    try {
        const user = await User.signup(fname, email, phoneNumber, collegeName, stream, year, password);

        //creating a token using the function we created
        const token = createToken(user._id);

        res.status(200).json({email, user, token});  // we can access and display the information like user.user.email at the frontend
    }
    catch(error){
        res.status(400).json({ error : error.message });
    }
    
}

module.exports = {
    loginUser,
    signupUser
}