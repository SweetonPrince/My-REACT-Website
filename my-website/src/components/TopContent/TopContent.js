import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Mr.Sweeton Prince</h1>
            <p>Web and App Developer</p>
            <a href="https://drive.google.com/file/d/1aLXdpshTtAW-hIfMRsTwWgMSxCUwv7LV/view?usp=drive_link">
                <button className='topContent__downloadbutton'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent__workbutton'>My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
