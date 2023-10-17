import React, { useEffect, useState } from 'react';
import '../../StyleComponent/Movie.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";
import Cards from "../card/card";
import Pagination from '../../Common/Pagination';
import { useDispatch } from 'react-redux';
import { movieData } from '../../Redux/AllSlice/movie';

function Movie() {
  const dispatch =useDispatch();
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    dispatch(movieData())
      .then((response) => {
        setMovieList(response.payload);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, [dispatch]);


    /*
     * The constant defined for pagination purpose
     * Here we are calculation the pagination as well
     * Start Pagination From here
     */
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Set the number of items per page.
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // Calculate the range of data to display on the current page.
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = movieList.slice(startIndex, endIndex);

    // console.log('displayedData ', displayedData);

    return (
        <div className="App">
            <main className="home-latest-movies">
                <h1>Movies</h1>
                <div className="list-cards">
                <Link style={{textDecoration:"none",color:"white"}} to={`/view-movie-details/`} ></Link>
                       { displayedData.map(movie => (
                         <React.Fragment key={movie.id}>
                            <Cards movie={movie} />
                            </React.Fragment>
                        ))
                    }
                </div>
             {/* Render the pagination component */}
            <Pagination className='pagination'
                currentPage={currentPage}
                totalPages={Math.ceil(movieList.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
            </main>
        </div>
    );
}
export default Movie

