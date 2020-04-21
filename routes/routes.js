const express = require('express');
const router= express.Router();
const Blog = require('../models/blog');

router.get('/blog', (req, res)=> {
   Blog.find((err, blog)=> {
       res.send(blog)
   })
})

router.post('/blog', (req, res)=> {
    let newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        date: req.body.date,
        content: req.body.content
    });

    newBlog.save((err, blog) => {
        if (err) {
            console.log('error post data');
        } else {
            res.json(blog)
        }
    })
})

router.get('/blog/:id', (req, res) => {
    Blog.findById(req.params.id)
        .exec((err, blog) => {
            if (err) {
                console.log("Error retrieving blog");
            } else {
                res.json(blog);
            }
        });
});

router.delete('/blog/:id', (req, res)=> {
    Blog.findByIdAndRemove(req.params.id , (err, blog)=> {
        if(err) {
            res.send('error delete blog')
        }else {
            res.json(blog)
        }
    })
})

// edit api

//edit api 
router.put('/blog/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, {
            $set: { title: req.body.title, author: req.body.author, date: req.body.date, content:req.body.content }
        }, {
            new: true
        },
        (err, updatedBlog) => {
            if (err) {
                res.send("Error updating Blog");
            } else {
                res.json(updatedBlog);
            }
        }

    );
})

module.exports = router