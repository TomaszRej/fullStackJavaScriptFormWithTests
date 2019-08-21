//const Post = require('../models/Post');
//const User = require('../models/User');



exports.register = async (req, res, next) => {

  try {
    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      authorName: req.userName
    });

    newPost.save();
    res.status(201).json({ message: "Post created!", post: newPost })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}