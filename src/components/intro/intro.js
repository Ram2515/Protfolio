import React from 'react';
import { Link } from 'react-scroll';
import './intro.css'; // Ensure you have this CSS file for styling
import backgroundImg from '../../assets/img.png'; // Adjust the path as needed
import hireImg from '../../assets/hireme.png'; // Adjust the path as needed

const Intro = () => (
  <section id='intro' className='introSection'>
    <div className='introContent'>
      <div className='introTextContainer'>
        <h1 className='introTitle'>Hello,</h1>
        <h2 className='introSubtitle'>
          I'm <span className='introName'>Ramchandra</span><br />
          Website Developer
        </h2>
        <p className='introDescription'>
          I am a front-end developer skilled in creating dynamic user interfaces with React.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className='btn'>
            <img className='btnImg' src={hireImg} alt='Hire Me' /> Hire Me
          </button>
        </Link>
      </div>
      <div className='imageContainer'>
        <img src={backgroundImg} alt='Background' className='bgImage' />
      </div>
    </div>
  </section>
);

export default Intro;
