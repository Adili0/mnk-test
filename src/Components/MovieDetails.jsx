import React from 'react';
import { useParams } from 'react-router-dom';
import moviedetails from '../assets/movie.json'; 
import { useDispatch, useSelector } from 'react-redux';

import './moviedetails.css'; 
import { updateMovieTickets } from '../redux/MovieSeats';

const MovieDetails = () => {
  const { id } = useParams();  
  const detail = moviedetails[id];  
  const {isloggedin} = useSelector((state) => state.movieSliceSliceReducer);
  const dispatch = useDispatch()


  let handlelogin = (index,e)=>{
    e.stopPropagation()
    if(isloggedin){
      alert('sucessfully booked')
      dispatch(updateMovieTickets({index}));
     

    }else{
      alert('Please login to buy seat')
    }
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details">
    
        <div className="movie-poster">
          <img src={detail.Poster} alt={detail.Title} />
        </div>

       
        <div className="movie-info">
          <h1>{detail.Title}</h1>
          <p className="movie-year">Year: {detail.Year}</p>
          <p className="movie-runtime">Runtime: {detail.Runtime}</p>
          <p className="movie-description">{detail.Description}</p>

          
          <p className="movie-genres"><strong>Genres:</strong> {detail.Genres.join(', ')}</p>

          
          <p className="movie-cast"><strong>Cast:</strong> {detail.Cast.join(', ')}</p>

        
          <p className="movie-director"><strong>Director:</strong> {detail.Director}</p>

          
          <p className="movie-awards"><strong>Awards:</strong> {detail.Awards.join(', ')}</p>

        
          <p className="movie-production-companies"><strong>Production Companies:</strong> {detail.ProductionCompanies.join(', ')}</p>

        
          <p className="movie-rating"><strong>IMDb Rating:</strong> {detail.Rating.IMDb}</p>
          <p className="movie-rating"><strong>Rotten Tomatoes Rating:</strong> {detail.Rating.RottenTomatoes}</p>

          
          <p className="movie-language"><strong>Language:</strong> {detail.Language}</p>

          <button onClick={(e) => handlelogin(id,e)} className='Buy-ticket'>
  Buy Seats
</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
