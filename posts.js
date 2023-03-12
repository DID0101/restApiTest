const express = require('express');
const router = express.Router();

//const Posts = require('../model/Post'); 

// get  post
router.get('/',(req,res)=>{
    res.send ("im inside Post file of posts")
});

// router.get('specific',(req,res)=>{
//     res.send ("im inside Post file of specific post")
// })

//save post method

router.post('/', async(req,res)=>{
    const newPost = new Posts({
        title:req.body.title,
        description : req.body.description,
    })
   
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (error) {
        res.json({message :err})
    }

})

module.exports=router;
