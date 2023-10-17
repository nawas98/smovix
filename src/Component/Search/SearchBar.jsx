import React, { useState } from 'react';
import '../../StyleComponent/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform the fetch request to your JSON file endpoint
    fetch('http://localhost:5000/moviesList')
      .then((response) => response.json())
      .then((data) => {
        // Call the onSearch callback function with the current searchQuery and data
        onSearch(searchQuery, data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
