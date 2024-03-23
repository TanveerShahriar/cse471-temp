import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    onSearch({ source, destination, date });
  };

  return (
    <div>
      <input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
      <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={handleSearch}>Search Buses</button>
    </div>
  );
};

export default SearchForm;
