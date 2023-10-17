import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Review() {
  const { m_id, m_title } = useParams();
  const navigate = useNavigate();
  const review_api = "http://localhost:5000/movie_reviews";
  const [state, setState] = useState({ review: "", rating: "" });

  const changeHandler = (event) => {
    event.persist();
    let { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const userData = window.sessionStorage.getItem('userEmail');
    const rating = parseFloat(state.rating); // Parse the rating as a float

    if (isNaN(rating) || rating < 1 || rating > 5) {
      alert("Rating must be a number between 1 and 5.");
      return;
    }

    const reviewData = {
      user_email: userData,
      movie_id: m_id,
      movie_name: m_title,
      review_text: state.review,
      rating: rating, // Use the parsed rating
    };

    axios.post(review_api, reviewData)
      .then((response) => {
        navigate(`/view-movie-details/${response.data.movie_id}`);
      })
      .catch((error) => {
        console.error("Error submitting review", error);
      });
  };

  return (
    <div className='container'>
      <div className="add-review-section">
        <h1>Write a Review</h1>
        <form onSubmit={handleReviewSubmit}>
          <textarea name="review" rows="5" id="review" placeholder="Write your review here" onChange={changeHandler} />
          <input type="number" name="rating" id="rating" placeholder="Rating (1-5)" min="1" max="5" step="0.1" onChange={changeHandler} />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default Review;
