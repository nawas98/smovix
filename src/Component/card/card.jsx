import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <SkeletonTheme color="#202020" highlightColor="#444">
            <div className="cards">
                <Skeleton height={300} duration={3} />
            </div>
        </SkeletonTheme>
        :
        <Link to={`/view-movie-details/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={movie.imageUrl} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.rating:""}<StarBorderIcon /> </span>
                    </div>
                    <div className="card__description">{movie ? movie.description.slice(0,50)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards