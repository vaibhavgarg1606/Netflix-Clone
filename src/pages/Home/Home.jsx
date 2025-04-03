import React from 'react'
import './Home.scss'

import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

import Navbar from '../../components/NavBar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />

      <div className="hero-sec">
        <img src={hero_banner} alt="hero-banner" className='hero-banner'/>
        <div className="hero-caption">
          <img src={hero_title} alt="hero-title" className='hero-title' />
          <p className="desc">
          Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play-icon" />
              Play
            </button>
            <button className="btn btn-dark">
              <img src={info_icon} alt="play-icon" />
              More info
            </button>

          </div>

        </div>
      </div>

      <div className="title-card-list">

      <TitleCards title="Matched to You" category="now_playing" page="1"/>
      <TitleCards title="New on Netflix" category="upcoming" page="2" />
      <TitleCards title="Top 10 movies in the U.S. Today" category="popular" />
      <TitleCards title="We Think You’ll Love These" category="top_rated" page="2" />
      <TitleCards title="Inspiring Movies" category="top_rated" />
      </div>
      <Footer />

    </div>
  )
}

export default Home