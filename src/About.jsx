import { useEffect, useRef } from 'react';
import './About.css';

const ABOUT_DATA = {
  overline: 'ABOUT ME',
  status: 'OPEN TO WORK • CHENNAI',
  headlineLines: ['Designer.', 'Developer.', 'Problem-solver.'],
  stats: [
    { value: 'BCA Graduate', label: 'Thiruthangal Nadar College' },
    { value: 'React.js & UI', label: 'Frontend Specialization' },
    { value: 'Web Developer', label: 'Responsive & Modern Web' },
  ],
  bio: [
    "Hello, I'm Nandha Kumar B, a web developer based in Chennai. I hold a Bachelor of Computer Applications (BCA) degree from Thiruthangal Nadar College and specialize in building clean, responsive, and user-focused web interfaces.",
    'My core strengths lie in HTML5, CSS3, JavaScript, Bootstrap, and React.js, paired with practical experience in Core Java, MySQL, and MongoDB. I focus on writing structured code, refining UI layouts down to every pixel, and deploying live applications on Vercel.',
  ],
  highlights: [
    {
      title: 'Education',
      primary: 'Bachelor of Computer Applications (BCA)',
      secondary: 'Thiruthangal Nadar College • Graduated May 2026',
    },
    {
      title: 'Technical Focus',
      primary: 'Web Developer & React.js Frontend',
      secondary: 'HTML5, CSS3, JavaScript (ES6+), Bootstrap, React.js & Vercel',
    },
  ],
};

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <>
    <section className="about-section fade-up" id="About" ref={sectionRef}>
      <div className="about-container">
      
        <div className="about-top-row fade-in-up">
          <p className="about-overline">{ABOUT_DATA.overline}</p>
          <span className="about-status-pill">{ABOUT_DATA.status}</span>
        </div>

        <div className="about-grid">
     
          <div className="about-left fade-in-up delay-1">
            <h2 className="about-headline">
              {ABOUT_DATA.headlineLines.map((line) => (
                <span className="about-headline-line" key={line}>
                  {line}
                </span>
              ))}
            </h2>

            <div className="about-stats">
              {ABOUT_DATA.stats.map((item) => (
                <div className="about-stat-item" key={item.label}>
                  <div className="about-stat-value">{item.value}</div>
                  <div className="about-stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="about-right fade-in-up delay-2">
            <div className="about-bio-group">
              {ABOUT_DATA.bio.map((paragraph, index) => (
                <p className="about-bio" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-highlights">
              {ABOUT_DATA.highlights.map((card) => (
                <div className="about-highlight-card" key={card.title}>
                  <span className="highlight-label">{card.title}</span>
                  <h3 className="highlight-primary">{card.primary}</h3>
                  <p className="highlight-secondary">{card.secondary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    
    </section>
   
      
        
</>
    
  );
}