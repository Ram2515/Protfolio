import React from 'react';
import './skill.css';
import webDevImg from '../../assets/website-design.png'; // Update image paths as needed
import softwareDevImg from '../../assets/app-design.png'; // Update image paths as needed
import frontendDevImg from '../../assets/ui-design.png'; // Update image paths as needed

const Skills = () => (
  <section id='skills' className='skills'>
    <div className='skills__header'>
      <h2 className='skills__title'>What I Do</h2>
      <p className='skills__desc'>
        As a versatile developer, I specialize in various areas of software and web development. My expertise includes building dynamic web applications, developing robust software solutions, and creating intuitive user interfaces.
      </p>
    </div>
    <div className='skills__grid'>
      <div className='skills__card'>
        <img src={webDevImg} alt='Web Development' className='skills__img' />
        <div className='skills__card-content'>
          <h3>Web Development</h3>
          <p className='skills__text'>
            Proficient in creating full-stack web applications using modern technologies and frameworks.
          </p>
        </div>
      </div>
      <div className='skills__card'>
        <img src={softwareDevImg} alt='Software Development' className='skills__img' />
        <div className='skills__card-content'>
          <h3>Software Development</h3>
          <p className='skills__text'>
            Experienced in developing software solutions across various platforms, focusing on robust and scalable systems.
          </p>
        </div>
      </div>
      <div className='skills__card'>
        <img src={frontendDevImg} alt='Frontend Development' className='skills__img' />
        <div className='skills__card-content'>
          <h3>Frontend Development</h3>
          <p className='skills__text'>
            Expert in crafting user-friendly and visually appealing front-end interfaces with React and other modern tools.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
