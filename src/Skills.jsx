


import { useEffect, useRef, useState } from 'react';
import './Skills.css';

import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import React from './assets/React.png';
import Bootstrap from './assets/Bootstrap.png';
import Java from './assets/Java.png';
import MySQL from './assets/MySQL.png';
import MongoDB from './assets/MongoDB.png';
import Node from './assets/Node.js.png';
import ex from './assets/Express.png';
import GitHub from './assets/github-logo.png';
import Vercel from './assets/Vercel.png';

const SKILLS = [
  {
    name: 'HTML5',
    percent: 95,
    delay: 0,
    icon: html,
  },
  {
    name: 'CSS3',
    percent: 90,
    delay: 100,
    icon: css,
  },
  {
    name: 'JavaScript',
    percent: 85,
    delay: 200,
    icon: js,
  },
  {
    name: 'React.js',
    percent: 85,
    delay: 300,
    icon: React,
  },
  {
    name: 'Bootstrap',
    percent: 85,
    delay: 400,
    icon: Bootstrap,
  },
  {
    name: 'Java',
    percent: 70,
    delay: 500,
    icon: Java,
  },
  {
    name: 'MySQL',
    percent: 75,
    delay: 600,
    icon: MySQL,
  },
  {
    name: 'MongoDB',
    percent: 85,
    delay: 700,
    icon: MongoDB,
  },
  {
    name: 'Node JS',
    percent: 75,
    delay: 800,
    icon: Node,
  },
  {
    name: 'Express JS',
    percent: 75,
    delay: 900,
    icon: ex,
  },
];


const TECH_STACK = [
   {
    name: 'HTML5',
  
    icon: html,
  },
   {
    name: 'CSS3',
  
    icon: css,
  },
   {
    name: 'JavaScript',

    icon: js,
  },
  {
    name: 'Bootstrap',

    icon: Bootstrap,
  },
  {
    name: 'React.js',
    
    icon: React,
  },
 
  {
    name: 'Node.js',
  
    icon: Node,
  },
  {
    name: 'Express.js',
    
    icon: ex,
  },
  {
    name: 'MongoDB',
    
    icon: MongoDB,
  },
  {
    name: 'MySQL',
  
    icon: MySQL,
  },
  {
    name: 'Java',
   
    icon: Java,
  },
  {
    name: 'GitHub',
  
    icon: GitHub,
  },
  {
    name: 'Vercel',
  
    icon: Vercel,
  },
];

function SkillBar({ name, percent, icon, delay, animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 1200;
    const steps = 60;
    const increment = percent / steps;
    let current = 0;
    let intervalId;

    const timerId = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment;
        if (current >= percent) {
          setCount(percent);
          clearInterval(intervalId);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);

    return () => {
      clearTimeout(timerId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [animate, percent, delay]);

  return (
    <div
      className="skill-item fade-in-up"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-header">
        <span className="skill-name">
          <img
            src={icon}
            alt={name}
            className="skill-icon-img"
            loading="lazy"
          />
          {name}
        </span>
        <span className="skill-percent">{count}%</span>
      </div>

      <div className="skill-track">
        <div
          className={`skill-bar ${animate ? 'animated' : ''}`}
          style={{
            width: `${percent}%`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          entry.target.querySelectorAll('.fade-in-up').forEach((el) => {
            el.classList.add('visible');
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section fade-up" id="Skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="skills-heading fade-in-up">
          <p className="label-overline">What I Know</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build great web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillBar key={skill.name} {...skill} animate={animate} />
          ))}
        </div>


        <div className="tech-stack-block fade-in-up">
          <p className="tech-stack-title">Tech Stack</p>
          <div className="tech-stack-grid">
            {TECH_STACK.map((stack) => (
              <div className="tech-stack-card" key={stack.name}>
            
                <img
                  src={stack.icon}
                  alt={stack.name}
                  className="tech-stack-icon"
                  loading="lazy"
                />
                <span className="tech-stack-name">{stack.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}