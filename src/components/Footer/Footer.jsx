import React from 'react'
import './Footer.scss'

import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
            <a href="#"><img src={facebook_icon} alt="facebook" /></a>
            <a href="#"><img src={instagram_icon} alt="instagram" /></a>
            <a href="#"><img src={twitter_icon} alt="twitter" /></a>
            <a href="#"><img src={youtube_icon} alt="youtube" /></a>
        </div>
        <div>
            <div className="row">
                <div className="col">Audio Description</div>
                <div className="col">Help Center</div>
                <div className="col">Gift Cards</div>
                <div className="col">Media Center</div>
            </div>
            <div className="row">
                <div className="col">Investor Relations</div>
                <div className="col">Jobs</div>
                <div className="col">Netflix Shop</div>
                <div className="col">Terms of Use</div>
            </div>
            <div className="row">
                <div className="col">Privacy</div>
                <div className="col">Legal Notices</div>
                <div className="col">Cookie Preferences</div>
                <div className="col">Corporate Information</div>
            </div>
            <div className="row">
                <div className="col">Contact Us</div>
                <div className="col">Do Not Sell or Share My Personal Information</div>
                <div className="col">Ad Choices</div>
                <div className="col"></div>
            </div>
        </div>
        <button className='btn'>Service Code</button>
        <div className="copyright">
            © 1997 - 2024 Netflix, Inc.
        </div>
    </div>
  )
}

export default Footer
