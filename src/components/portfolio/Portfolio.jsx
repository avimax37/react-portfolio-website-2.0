import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/proj1.jpg'
import IMG2 from '../../assets/proj2.jpg'
import IMG3 from '../../assets/proj3.jpg'
import IMG4 from '../../assets/proj4.jpg'
import IMG5 from '../../assets/proj5.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Speed and Direction Control of DC Motor Using Arduino',
    github: 'https://github.com/avimax37/Speed-Direction-Control-DC-Motor-Arduino.git',
    learnmore: 'https://uemkprojects2023.blogspot.com/2022/08/speed-control-of-dc-motor-uemk.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    github: 'https://github.com',
    learnmore: 'https://blogger.com'
  },
  {
    id: 3,
    image: IMG3,
    title: `'PAWS' - A Website for Animal Rescue and Adoption`,
    github: 'https://github.com/avimax37/PAWS-Animal-Rescue-And-Adoption',
    learnmore: 'https://uemkprojects2023.blogspot.com/2022/08/paws-website-for-animal-rescue-and.html'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 4',
    github: 'https://github.com',
    learnmore: 'https://blogger.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project 5',
    github: 'https://github.com',
    learnmore: 'https://blogger.com'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, learnmore }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={learnmore} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio