const db = require('./database');

const Bookings = function bookingObject(bookings) {
  this.date = bookings.date;
  this.hour = bookings.hour;
  this.price = bookings.price;
  this.booking_id = bookings.booking_id;
  
};

Bookings.findBookings = result => {
  db.query(
    `SELECT bookings.date, bookings.id, bookings.hour, bookings.price,
              FROM bookings`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      return result(null, dbResult);
    }
  );
};

Orders.findBookingsByUser = (userId, result) => {
  db.query(
    `SELECT bookings.date, bookings.id, bookings.hour, bookings.price,
              FROM bookings`,
    userId,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

Bookings.findMyBookings = (userId, result) => {
  db.query(
    `SELECT bookings.date, bookings.id, bookings.hour, orders.price,
              FROM bookings`,
    userId,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

Orders.updateBooking = (bookingId, booking, result) => {
  db.query(
    `UPDATE bookings SET ? WHERE id = ?`,
    [booking, bookingId],
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      if (dbResult.affectedRows) {
        return result(null, { booking });
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = booking;
