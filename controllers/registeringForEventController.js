const Joi = require('joi');
const Event = require('../models//Event');


exports.register = async (req, res, next) => {

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
    const newEvent = new Event({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      eventDate: req.body.eventDate
    });

    newEvent.save();
    res.status(201).json({message: "Event created!", data: newEvent});
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};