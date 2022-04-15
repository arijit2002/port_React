
import React from 'react'
import './skills.css'

const frontendSkills=[
    {
        title: 'HTML'
    },
    {
        title: 'Bootstrap'
    },
    {
        title: 'CSS'
    },
    {
        title: 'JavaScript'
    },
    {
        title: 'React.js'
    }
];
const backendSkills=[
    {
        title: 'Python Flask'
    },
    {
        title: 'Spring Boot'
    },
    {
        title: 'Oracle SQL'
    },
    {
        title: 'MongoDB'
    },
    {
        title: 'Heroku'
    }
];
const EHSkills=[
    {
        title: 'N-Map'
    },
    {
        title: 'Wireshark'
    },
    {
        title: 'Metasploit'
    },
    {
        title: 'WPScan'
    },
    {
        title: 'Burp Suite'
    },
    {
        title: 'Nikto'
    }
]

function Skills() {
  return <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skill w-50">
        {
            frontendSkills.map((item,index)=>(
                <div className="skill__data mb-3">
                    <div className="skill__title d-flex align-items-center justify-content-between">
                        <h6>{item.title}</h6>
                    </div>   
                </div>
            ))
        }
      </div>
      <div className="backend__skill w-50">
      {
            backendSkills.map((item,index)=>(
                <div className="skill__data mb-3">
                    <div className="skill__title d-flex align-items-center justify-content-between">
                        <h6>{item.title}</h6>
                    </div>   
                </div>
            ))
        }
      </div>
      <div className="EH__skill w-50">
      {
            EHSkills.map((item,index)=>(
                <div className="skill__data mb-3">
                    <div className="skill__title d-flex align-items-center justify-content-between">
                        <h6>{item.title}</h6>
                    </div>   
                </div>
            ))
        }
      </div>
  </div>
}

export default Skills