import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import users from '../assets/credential.json';  
import { useDispatch, useSelector } from 'react-redux';
import { authentication  } from '../redux/MovieSeats';
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isloggedin} = useSelector((state) => state.movieSliceSliceReducer);
  const dispatch = useDispatch()

  
useEffect(()=>{
  console.log(isloggedin)
  if(isloggedin){
    navigate('/')
    
  }
},[isloggedin])

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
     dispatch(authentication({auth : true}))
     
    } else {
     alert('Mistake in username or password');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
