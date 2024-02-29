import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../assets/laptop-coding.jpg';
import LinearProgress from "@material-ui/core/LinearProgress";
import './SkillContainer.css';

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className='skillContainer__image'>
        <img src={skillimg} alt="" />
      </div>
      <div className='skillContainer__text'> 
         <h2>SKILLSET</h2>
          <div className='skillContainer__skillSet'>
            <h5>Java</h5>
            <div className='skillContainer__slider skillContainer__slider1'>
                <LinearProgress variant="determinate" value={80} />
            </div>
         </div>  
         <div className='skillContainer__skillSet'>
            <h5>MySql</h5>
            <div className='skillContainer__slider skillContainer__slider2'>
                <LinearProgress variant="determinate" value={90} />
            </div>
         </div> 
         <div className='skillContainer__skillSet'>
            <h5>Hibernate</h5>
            <div className='skillContainer__slider skillContainer__slider3'>
                <LinearProgress variant="determinate" value={60} />
            </div>
         </div>  
         <div className='skillContainer__skillSet'>
            <h5>SpringBoot</h5>
            <div className='skillContainer__slider skillContainer__slider4'>
                <LinearProgress variant="determinate" value={75} />
            </div>
         </div>  
         <div className='skillContainer__skillSet'>
            <h5>JavaScript</h5>
            <div className='skillContainer__slider skillContainer__slider5'>
                <LinearProgress variant="determinate" value={60} />
            </div>
         </div>  
         <div className='skillContainer__skillSet'>
            <h5>React</h5>
            <div className='skillContainer__slider skillContainer__slider6'>
                <LinearProgress variant="determinate" value={90} />
            </div>
         </div>  
      </div>
    </Element>
  )
}

export default SkillContainer
