import React from 'react';

const BusList = ({ buses }) => {
  return (
    <div>
      {buses.map(bus => (
        <div key={bus._id}>
          <h2>{bus.name}</h2>
          <p>Departure Time: {bus.departureTime}</p>
          <p>Available Seats: {bus.availableSeats}</p>
          {/*booking button */}
        </div>
      ))}
    </div>
  );
};

export default BusList;