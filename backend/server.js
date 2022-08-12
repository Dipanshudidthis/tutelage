require('dotenv').config();

const express = require('express');
const { default: mongoose } = require('mongoose');

const userRoutes = require('./routes/user');

//creating express app, naming the constant app
const app = express();


//middleware 
app.use(express.json());  //this looks for any body of the request that is passed, if the request will have a body this function will attach it to it and we can access it using 'req'.

app.use((req, res, next) => {  //if we don't use Next keyword, the program will not run after this function.
    console.log(req.path, req.method);
    next();
})


//routes, all the requests in that workout folder is being called here
app.use('/api/user', userRoutes);  //"/api/user" means when the user will request for '/login' it will be called like /api/user/login


//connection to database
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to Database and Listening on port ${process.env.PORT} :D`);
        })
    })
    .catch((error) => {
        console.log(error);
    })