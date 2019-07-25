const Post = require("../models/post") 

// exports.getPosts = (req, res) => {
//     res.json({
//         posts: [{ title: "First post"},{ title: "Second post"}]
//     });
// };

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    //console.log("CREATING POST: ", req.body)
    post.save((err, result) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            post: result
        })
    });
};

exports.listPosts = (req, res) => {
    Post.find({})
    .exec( (err, post) => {
        if(err){res.send('error has occured');}
        else{res.json(post);}
    })
}

exports.getPosts = (req, res) => {
    Post.findOne({
        _id: req.params.id
    })
    .exec( (err, post) => {
        if(err){res.send('error has occured');}
        else{res.json(post);}
    })
};

exports.putPosts = (req, res) => {
    Post.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {title:req.body.title}},
    {upsert:true}, (err, newPost) => {
        if(err){res.send('error has occured');}
        else{res.status(204);}
    });
};