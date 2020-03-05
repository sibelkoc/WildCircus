const { Booking } = require('../models/booking.model');

// Create a new booking
exports.createNewbooking = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  // Create a booking
  const booking = new booking({
    booking_id: request.body.booking_id,
    date: request.body.date,
    hour:request.body.hour,
    price: request.body.price,
  });

  return booking.createNewBooking(booking, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the booking.'
      });
    }
    return response.status(201).send(data);
  });
};

