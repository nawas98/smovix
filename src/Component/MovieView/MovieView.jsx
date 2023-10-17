import React, { useEffect, useState } from "react";
import "../../StyleComponent/MovieView.css";
import { useParams, Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";

function MovieView() {
  const { id } = useParams();
  const api_moview = "http://localhost:5000/moviesList";
  const [moview, setmoview] = useState([]);
  const currentMovieDetail = moview;
    //console.log("Current Movie: ",currentMovieDetail);
  const [review, setReview] = useState([]);
  //console.log("State for review",review);

  //check If user is logged in or not
  const valid_token = window.sessionStorage.getItem("token");

  useEffect(() => {
    axios.get(`${api_moview}/${id}`)
      .then(res => {
        //console.log("Fetched data", res.data);
        setmoview(res.data)
      })
      .catch(err => {
        //console.log("Any error occured", err);
        alert("unable to find the data");
      });
  }, []);

  useEffect(() => {
    // Fetch data from the specified URL using Axios
    axios.get(`http://localhost:5000/movie_reviews?movie_id=${id}`)
      .then((response) => {
        console.log("res from then", response);
        setReview(response.data);
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  if (!currentMovieDetail) {
    return <div>Item not found</div>;
  }
  //fetch only logged in user review
  //const  userReviews = review.filter(review => review.user_email == window.sessionStorage.getItem('userEmail') && id==review.movie_id);


  return (
    <div className="movie">
      <div className="movie__intro">
        <img className="movie__backdrop" src={currentMovieDetail.imageUrl} alt="Backdrop" />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img className="movie__poster" src={currentMovieDetail.imageUrl} alt="Poster" />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{currentMovieDetail.title}</div>
            <div className="movie__tagline">{currentMovieDetail.tagline}</div>
            <div className="movie__rating">
              {currentMovieDetail.rating} <i className="fas fa-star" />
              <span className="movie__voteCount">({currentMovieDetail.vote_count} votes)</span>
            </div>
            <div className="movie__releaseDate">Release date: {currentMovieDetail.release_date}</div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Description</div>
            <div>{currentMovieDetail.description}</div>
          </div>
          <div className="movie-watch-button">
            <a href={currentMovieDetail.watchTrailer} target='_blank'>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success">
                  Watch Trailer
                </Button>
                {valid_token ? (
                 <Link to={`/movie-review/${currentMovieDetail.id}/${currentMovieDetail.title}`}>
                 <Button variant="contained" color="success">
                   Add Review
                 </Button>
               </Link>
                ) : (
                  <Link to="/login">
                     <Button variant="contained" color="success">
                      Add Review
                    </Button>
                  </Link>
                )}
              </Stack>
            </a>
          </div>
        </div>
      </div>
      <div className="user-reviews">
        <h2>User Reviews</h2>
        <div className={ review &&  review.length > 0 ? 'user-review-list' : 'no-user-review-list'}>
          { review &&  review.length > 0 ? (
            review.map(rev => (
              <div key={rev.id}>
                <p>User Email: {rev.user_email}</p>
                <p>Rating: {rev.rating}</p>
                <p>Review: {rev.review_text}</p>
                <hr/>

              </div>
            ))
          ) : (
            <p>No user reviews for this movie.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieView;
