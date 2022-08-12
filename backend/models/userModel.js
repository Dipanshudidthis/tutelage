const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname : {
        type : String,
        required : true
    },
    email : {
        type : String, 
        required : true,
        unique : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    collegeName : {
        type : String,
        required : true
    },
    stream : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    password : {
        type : String, 
        required : true
    }
})

//static signup method
userSchema.statics.signup = async function(fname, email, phoneNumber, collegeName, stream, year, password) {

    //validation
    if(!email || !password || !phoneNumber || !year || !fname || !stream || !collegeName){
        throw Error('All fields must be filled');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough');
    }

    const exist = await this.findOne({ email })        //when we create a stactic method like we did here, we do not use the functions name like user.findOne, we can directly use this. keyword

    if(exist){
        throw Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10)   //salt is a random string of characters that gets attached to a user's password to make it more secure

    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ fname, email, phoneNumber, collegeName, stream, year, password : hash });

    return user;

}

//static login method
userSchema.statics.login = async function(email, password){

    if(!email || !password){
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email });        //when we create a stactic method like we did here, we do not use the functions name like user.findOne, we can directly use this. keyword

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect password')
    }

    return user;

}


module.exports = mongoose.model('User', userSchema);