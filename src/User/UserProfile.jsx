import React, { useEffect, useState } from 'react';

import axios from 'axios';
import '../StyleComponent/UserProfile.css'

const UserProfile = () => {


    const profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";
    
    const valid_token = window.sessionStorage.getItem("token");
    
    const [single_user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        profile_pic: ""
    });

    useEffect(() => {
        axios.get(profile_api, {
                headers: {
                    "x-access-token": valid_token,
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                }
            })
            .then(res => {
               
                let base_url = "https://wtsacademy.dedicateddevelopers.us/";
                let folder_path = "uploads/user/profile_pic/";
                let img_url = base_url + folder_path + res.data.data.profile_pic;
                setUser({
                    ...single_user,
                    first_name: res.data.data.first_name,
                    last_name: res.data.data.last_name,
                    email: res.data.data.email,
                    profile_pic: img_url
                });
            })
            .catch(err => {
                console.log("profile error", err);
            });
    }, []); 

  
    const emailToFilter = single_user.email;
    const reviews_api = `http://localhost:5000/movie_reviews?user_email=${emailToFilter}`;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(reviews_api)
          .then((response) => {
            if (response.status === 200) {
              setReviews(response.data);
            }
          })
          .catch((error) => {
            console.error('Error fetching reviews:', error);
          });
    }, [emailToFilter]);
    
  
    return (
        <>
            <div className='container-main'>
                <div class="row">
                    <div className='userDeatilsMain'>
                        <div className='userDetails'>
                            <div className='userImage'>
                                <img src={single_user.profile_pic} alt="Profile"></img>
                            </div>
                            <div className='userOtherdetails'>
                                <ul>
                                    <li>First name: {single_user.first_name}</li>
                                    <li>Last name: {single_user.last_name}</li>
                                    <li>Email: {emailToFilter}</li>
                                   
                                </ul>
                                
                            </div>
                        </div>
                        <div className='userReviewdetailsmain'>
                            <div className='userReviws'>
                                <h2>Reviews</h2>
                                <ul>
                                {reviews && reviews.length>0 ? (
                                    reviews.map((review, index) => (
                                        <li key={index}>
                                            <p>Movie Name: {review.movie_name}</p>
                                            <p>Review: {review.review_text}</p>
                                            <p>Rating: {review.rating} stars</p>
                                        </li>
                                    ))
                                ) : (
                                    <li>You haven't provided any reviews yet</li>
                                )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </>
    );
}

export default UserProfile;
