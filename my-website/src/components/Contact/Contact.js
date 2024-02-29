import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@material-ui/core'
import {Facebook,GitHub,Instagram,LinkedIn} from '@material-ui/icons'
import './Contact.css'


const Contact = () => {
  return (
    
      <Element className="contact" id="contact">
        <h1>Contact</h1>
        
        <div className="contact__container">
            <p>
                Email : <span>sweetonsweeta4@gmail.com</span>
            </p>
        
            <div className='contact__icons'>
            <a href='https://www.linkedin.com/in/sweetonprince4/'>
                <IconButton>
                    <LinkedIn />
                </IconButton>
            </a>
            <a href='https://www.facebook.com/sweetonjerry'>
                <IconButton>
                    <Facebook />
                </IconButton>
            </a>
            <a href='https://www.instagram.com/sweeton._/'>
                <IconButton>
                    <Instagram />
                </IconButton>
            </a>
            <a href='https://github.com/SweetonPrince'>
                <IconButton>
                    <GitHub />
                </IconButton>
            </a>
            </div>
        </div>
      </Element>

  )
}

export default Contact
