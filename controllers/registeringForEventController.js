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


  if (result.error !== null) {
    res.status(400).send({ message: result.error.details[0].message });
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
    res.status(201).json({ message: "Event created!", event: newEvent });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};