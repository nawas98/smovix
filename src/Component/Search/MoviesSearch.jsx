import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import axios from 'axios';
import '../../StyleComponent/MoviesSearch.css';
import Pagination from '../../Common/Pagination';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const [suggestions, setSuggestions] = useState([]); // State for movie suggestions
  const itemsPerPage = 1; // Set the number of items per page.

  // Function to handle the search
  const handleSearch = (query, data) => {
    // Filter the movies based on the searchQuery
    const filtered = data.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
    setCurrentPage(1); // Reset the current page when searching.
  };

  // Fetch movies data from your JSON file when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:5000/moviesList')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to update movie suggestions as the user types
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    // Filter movie suggestions based on the input value
    const filteredSuggestions = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Calculate the range of data to display on the current page.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedMovies = filteredMovies.slice(startIndex, endIndex);

  return (
    <div className='movie-search-app'>
      <h1 className='movie-search'>Search Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}>
              <Link to={`/view-movie-details/${suggestion.id}`}>
                {suggestion.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default MoviesSearch;
