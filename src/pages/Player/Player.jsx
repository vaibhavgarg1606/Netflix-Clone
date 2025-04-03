import React, { useEffect, useState } from 'react'

import back_arrow_icon from '../../assets/back_arrow_icon.png'

import './Player.scss'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:"",
  })
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mjk4NTQ5ODgzMjY5YmUxMTZhYTdhZTNiYTkxNTUyYiIsIm5iZiI6MTczMDAzODg5OC40MDE4MDEsInN1YiI6IjY3MWU0YmE2NDI3YzVjMTlmMDI2NDhjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XieChMFykTJS5VQ2xYq3lNqPnW6Gk3zuYg9xaW-OBMs'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results.filter((word) => word.type === "Teaser")[0]))
    .catch(err => console.error(err));
  }, [])
  
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate('/')}} />
      <iframe width='90%' height='90%' src={`https://youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player