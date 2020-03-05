const db = require('./database');

const Bookings = function bookingObject(orders) {
  this.date = bookings.date;
  this.hour = bookings.hour;
  this.price = bookings.price;
  this.booking_id = bookings.booking_id;
};

db.beginTransaction(function transaction(err) {
  if (err) {
    throw err;
  }

  Orders.createBookings = (orders, result) => {
    db.query(
      `INSERT INTO bookings`,
      bookings,
      (error, dbResult) => {
        if (error) {
          return db.rollback(function rollback() {
            throw error;
          });
        }
        return result(null, { id: dbResult.insertId, ...bookings });
      }
    );
  };

  db.commit(function commit(error) {
    if (err) {
      return db.rollback(function rollback() {
        throw error;
      });
    }
    return console.log('success!');
  });
});

module.exports = { Bookings };
