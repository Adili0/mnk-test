import React, { useEffect, useState } from 'react';
import './home.css'
import { useDispatch, useSelector } from 'react-redux';

import { getmovieData, updateMovieTickets } from '../redux/MovieSeats';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const useNav = useNavigate()
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 
  const dispatch = useDispatch()
  const {movieData} = useSelector((state) => state.movieSliceSliceReducer); 
  const {isloggedin} = useSelector((state) => state.movieSliceSliceReducer);

  useEffect(() => {
    setMovies(movieData)
  }, [movieData]);
  useEffect(()=>{
dispatch(getmovieData())
  },[])





const handleMovieClick = (id) => {

  useNav(`/moviedetails/${id}`); 
};

const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
 )
  let handlelogin = (index,e)=>{
    e.stopPropagation()
    if(isloggedin){
      dispatch(updateMovieTickets({index}))
    }else{
      alert('Please login to buy seat')
    }
  }

  return (
    <>
    <div className="input-filter">
        <input
          type="text"
          placeholder="Search Events"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
   
    <div className="App">
      <div className="movie-container">
        {filteredMovies.map((movie, index) => (
          <div  key={index} onClick={() => handleMovieClick(index)} className="movie-card">
            <img 
              src={movie.Poster || 'https://via.placeholder.com/300'} 
              alt={movie.Title} 
              className="movie-poster"
            />
            <div className="movie-card-content">
              <h3>{movie.Title}</h3>
              <p>{movie.Year} | {movie.Runtime}</p>
            </div>
            <button onClick={(e) => handlelogin(index,e)} className='Buy-ticket'>
  Buy Seats
</button>

            <h2>{movie.remainingTickets !== undefined ? `Available Seats: ${movie.remainingTickets}` : 'Avialble Seats: 10'}</h2>
            <h2>{movie.remainingTickets !== undefined ? `Seats Booked: ${movie.seatsBooked}` : 'Seats Booked: 10'}</h2>

              
          </div>
               ))}
  
      
    

      </div>

    </div>
    </>
    
  );
}

export default Home;
