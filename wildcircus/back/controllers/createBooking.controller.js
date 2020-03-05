const { Booking } = require('../models/createBooking.model');



exports.createBookings = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const bookings = new Bookings({
    date: request.body.date ? request.body.date : null,
    hour: request.body.hour || null,
    price: request.body.price ? request.body.price : null,
    booking_id: request.body.booking_id ? request.body.booking_id : null
  });

  // Save booking in the database
  return Bookings.createBookings(bookings, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Booking.'
      });
    }
    return response.status(201).send(data);
  });
};
