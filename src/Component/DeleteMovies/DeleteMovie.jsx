import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMovie, movieData } from '../../Redux/AllSlice/movie';
import './DeleteMovie.css'

const DeleteMovie = () => {
  let [state, setState] = useState([]);
  const { isLoading, error } = useSelector(state => state.movie);
  // console.log("UseSelector in details: ",isLoading,detail,error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieData())
      .then(res => {
        setState(res.payload)
        // console.log("Fetched projects: ",res.payload);
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  }, [dispatch]);

  const deleteHandeler=(id)=>{
    dispatch(deleteMovie(id))
  }
  return (
    <div className="table-box">
    {isLoading && <h3>...Loading</h3>}
    {error && <h3>{error}</h3>}
    <table>
      <thead className="tablehead">
        <tr>
          <th className="color1">ID :</th>
          <th className="color1">Title :</th>
          <th className="color1">Genres :</th>
          <th className="color1">Category :</th>
          <th className="color1">Delete</th>
        </tr>
      </thead>
      {state &&  state.map(view => (
        <React.Fragment key={view.id}>
          <tbody className="tablebody">
            <tr>
              <td>{view.id}</td>
              <td>{view.title}</td>
              <td>{view.genres}</td>
              <td>{view.category}</td>
              <td className="wid"><button onClick={()=>deleteHandeler(view.id)}>Delete</button></td>
            </tr>
          </tbody>
        </React.Fragment>
      ))}
    </table>
  </div>
  )
}

export default DeleteMovie