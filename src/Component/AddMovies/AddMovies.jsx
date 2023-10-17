import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postMovie } from '../../Redux/AllSlice/movie';
import './AddMovies.css'

const AddMovies = () => {
    const dispatch = useDispatch();
    let [inputState, setInput] = useState({
        title: "",
        genres: "",
        description: "",
        rating: "",
        popularity: "",
        vote_count: "",
        release_date: "",
        watchTrailer: "",
        watchMovie: "",
        category:""
    });
    const [image, setImage] = useState({});

    const imageHandeler = (e) => {
        console.log(e.target.files);
        const data = new FileReader();
        data.addEventListener('load', () => {
          setImage(data.result);
        })
        data.readAsDataURL(e.target.files[0])
      }


    let changehandeler = (event) => {
        event.persist();
        let { name, value } = event.target
        setInput({ ...inputState, [name]: value });
    }

    let submitHandeler = (event) => {
        event.preventDefault();
        console.log("submitted value :", inputState);

        let detail = {
            title: inputState.title,
            genres: inputState.genres,
            description: inputState.description,
            rating: inputState.rating,
            popularity: inputState.popularity,
            vote_count: inputState.vote_count,
            watchTrailer: inputState.watchTrailer,
            watchMovie: inputState.watchMovie,
            release_date: inputState.release_date,
            category:inputState.category,
            imageUrl: image
        }

        dispatch(postMovie(detail))
    }
  return (
    <>
    <div className="contact-form">
        <form onSubmit={submitHandeler}>
            <h1>Adding movie</h1>
            <select name="category" id="category"  onChange={changehandeler} >
                <option value="">Select category</option>
                <option value="hollywood">Hollywood</option>
                <option value="bollywood">Bollywood</option>
            </select>
            <input type="text" name='title' id='title' placeholder='Enter title' onChange={changehandeler} />
            <input type="text" name='genres' id='genres' placeholder='Enter genres' onChange={changehandeler} />
            <input type="text" name='description' id='description' placeholder='Enter description' onChange={changehandeler} />
            
            <input type="text" name='rating' id='rating' placeholder='Enter rating' onChange={changehandeler} />
            <input type="text" name='popularity' id='popularity' placeholder='Enter popularity' onChange={changehandeler} />
            <input type="text" name='vote_count' id='vote_count' placeholder='Enter vote count' onChange={changehandeler} />
            <input type="text" name='watchTrailer' id='watchTrailer' placeholder='Enter trailer Url' onChange={changehandeler} />
            <input type="text" name='watchMovie' id='watchMovie' placeholder='Enter watch movie' onChange={changehandeler} />
            <label htmlFor="image">Release date</label>
            <input type="date" name='release_date' id='release_date' onChange={changehandeler} />
            <label htmlFor="image">Banner</label>
            <input type="file" name='image' id='image' onChange={imageHandeler} />
            <input type="submit" id='submit' value="Submit" />

        </form>
    </div>
</>
  )
}

export default AddMovies