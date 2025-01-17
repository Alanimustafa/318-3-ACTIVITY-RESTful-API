const express = require('express');
const app = express();
const PORT = 3000 ;

const users = require('./data/users.js');
const posts = require('./data/posts.js');


// ------------------ Routes---------------


// Users requests
    app.get("/users/:name", (req, res) => {

            //res.json(users);
            const user = users.find((user) => user.name == req.params.name);
            if (user) {res.json(user)} 
            else if (!user) {
                res.statusCode = 404;
                res.send(`Error ${res.statusCode} User Not Found`)
            };
    });


// Posts requests    
    app.get("/posts/:id", (req, res) => {
        const post = posts.find((post) => post.id == req.params.id);
        if (post) {
            res.json(post);
        } else if (!post) {
            res.send("Post not found");
        }
        
    });



// Starting the server by listening to the given port "3000"
app.listen(PORT, (req,res) => {
    console.log(`Server has been started on PORT# ${PORT}`);
})
