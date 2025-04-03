import React, { useEffect, useState } from 'react'
import './TitleCards.scss'

import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = (props) => {

  const [apiData, setApiData] = useState([]); 
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${props.category?props.category:"now_playing"}?language=en-US&page=${props.page?props.page:'1'}`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mjk4NTQ5ODgzMjY5YmUxMTZhYTdhZTNiYTkxNTUyYiIsIm5iZiI6MTczMDAzODg5OC40MDE4MDEsInN1YiI6IjY3MWU0YmE2NDI3YzVjMTlmMDI2NDhjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XieChMFykTJS5VQ2xYq3lNqPnW6Gk3zuYg9xaW-OBMs'
    }
  };
  


  return (
    <div className='title-cards'>
        <h2>{props.title}</h2>
        <div className="card-list">
            {apiData.map((card, index) => {
                return <Link to={`/player/${card.id}`} className="card-details" key={index}>
                    <img className='card-img' src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                </Link>
            })}
        </div>
    </div>
  )
}

export default TitleCards
