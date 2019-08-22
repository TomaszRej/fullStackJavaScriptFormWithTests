const Joi = require('joi');
//const Post = require('../models/Post');
//const User = require('../models/User');


exports.register = async (req, res, next) => {

  console.log(req.body)
  const schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    eventDate: Joi.date().required()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(400).send(result.error.details);
    return
  }


  try {
    // const newPost = new Post({
    //   title: req.body.title,
    //   description: req.body.description,
    //   author: req.body.author,
    //   authorName: req.userName
    // });

    // newPost.save();
    res.status(201).json({message: "Post created!", data: {"firstName": req.body.firstName}})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};