import React, { useEffect, useState } from 'react';
import '../../StyleComponent/Home.css';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Cards from "../card/card";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function Home() {
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);//Used for Skeleton
    const {type} = useParams()
    useEffect(() => {
        axios.get('http://localhost:5000/moviesList')
            .then(response => {
                setMovieList(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error loading data:', error);
            });
    }, []);
    

    //Used for skeleton
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 
  
    return (
        <div className="App">
            <header className="header">
            {
                isLoading
                ?
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <div className="posterImage">
                        <Skeleton height={600} duration={3} />
                    </div>
                </SkeletonTheme>
                :
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    emulateTouch={true}
                >
                {movieList.slice(25,30).map((movie, index) => (
                    <Link style={{textDecoration:"none",color:"white"}} to={`/view-movie-details/${movie.id}`} >
                        <div className="posterImage">
                            <img src={movie.imageUrl} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.title: ""}</div>
                            <div className="posterImage__runtime">
                                {movie?movie.release_date:""}
                                <span className="posterImage__rating">
                                    {movie ? movie.rating :""}
                                    <StarBorderIcon/>{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.description : ""}</div>
                        </div>
                    </Link>
                ))}
                     {movieList.slice(10,15).map((movie, index) => (
                    <Link style={{textDecoration:"none",color:"white"}} to={`/view-movie-details/${movie.id}`} >
                        <div className="posterImage">
                            <img src={movie.imageUrl} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.title: ""}</div>
                            <div className="posterImage__runtime">
                                {movie?movie.release_date:""}
                                <span className="posterImage__rating">
                                    {movie ? movie.rating :""}
                                    <StarBorderIcon/>{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.description : ""}</div>
                        </div>
                    </Link>
                ))}
                </Carousel>
            }
            </header>
        
            <div className="movie__list">
                <h1 className="trending"><TrendingUpIcon/>TRENDING</h1>
                <div className="list__cards">
                    {
                        movieList.slice(15,27).map(movie => (
                            <Cards movie={movie} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default Home

