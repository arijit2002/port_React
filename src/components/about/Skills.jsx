
import React from 'react'
import './skills.css'

const frontendSkills=[
    {
        title: 'JavaScript',
        width: '60%',
        percentage: '60%'
    },
    {
        title: 'React',
        width: '60%',
        percentage: '60%'
    },
    {
        title: 'JavaScript',
        width: '60%',
        percentage: '60%'
    }
]

function Skills() {
  return <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skill">
        {
            frontendSkills.map((item,index)=>(
                <div className="skill__data">
                    <div className="skill__title">
                        <h6>{item.title}</h6>
                        <span>{item.percentage}</span>
                    </div>
                    <div className="skill__bar">
                        <span className='skill__bar-percentage'></span>
                    </div>
                </div>

            ))
        }
      </div>
      <div className="backend__skill"></div>
  </div>
}

export default Skills