// Requireing the express server
const express = require('express');

// Creating the Express server applicatoin
const app = express();

// Creating the PORT constant and assign the process environment or a default PORT# 3000
const PORT = process.env.PORT || 3000 ;

// ------------------------- Routers Imports
// users Import
const users = require('./data/users.js');
// Posts Import
const posts = require('./data/posts.js');


// ------------------ Routes---------------


// Users requests
    app.get("/users/:id", (req, res, next) => {

            // res.json(users);
            const user = users.find((user) => user.id == req.params.id);
            if (user) {
                res.json(user) ;
                next();
            } 
            else if (!user) {
                res.statusCode = 404;
                res.send(`Error ${res.statusCode}: User ${req.params.id} Not Found`);
                next();
            };
    });


// Posts requests    
    app.get("/posts/:id", (req, res, next) => {
        const post = posts.find((post) => post.id == req.params.id);
        if (post) {
            res.json(post);
            next();
        } else if (!post) {
            res.statusCode = 404;
            res.send(`Error ${res.statusCode}: User ${req.params.id} Not Found`);
            next();
        }
        
    });



// Starting the server by listening to the given port "3000"
app.listen(PORT, (req,res) => {
    console.log(`Server has been started on PORT# ${PORT}`);
})
