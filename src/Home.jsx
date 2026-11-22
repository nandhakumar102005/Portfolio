import { ReactTyped } from "react-typed"
import Navbar from "./Navbar"
import profile from "./assets/profile 2.jpeg"
import email from "./assets/email.png"
import { useState } from "react"
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"
import Resume from "./assets/Nandha kumar  B   Frontend Developer Updated  Resume.pdf"


function Home() {
    const [swinging, setSwinging] = useState(false);

    const handleclick = () => {
        setSwinging(false);
        requestAnimationFrame(() => {
            setSwinging(true)
        })
    }
    return (
        <>
              <Navbar />
            <div className="container-xxl fade-up" id="Home">
              

                <div className="container-xxl Homemaindiv" >
                    <div className="namecont">
                        <h3 className="hithere">—  HI THERE, I'M</h3>
                        <h1 className="name">Nandha Kumar B</h1>
                        {/* <h3>{""}
                <span className="typed-text">
                    <ReactTyped strings={[
                        "Frontend Developer",
                        "React js Developer",
                        "Full Stack Web Developer"
                    ]}
                    typeSpeed={70}
                    backSpeed={60}
                    loop
                    startDelay={500}
                    backDelay={1500}
                    
                    
                    />
                    </span>    
                    </h3>             */}


                        <div className="wrapper">
                            <h3><span className="typed-words">
                                <span>Full Stack Web Developer</span>
                                <span>React.js Developer</span>
                                <span>Frontend Developer</span>

                            </span></h3>
                        </div>

                        <div className="homepdiv">
                            <h6>
                                A recently graduated <b> Full Stack Developer with a BCA Degree</b>, specializing
                                in building modern, responsive web applications. Strong expertise
                                in <b>Frontend technologies</b> and <b>React Js</b> , I focus on
                                creating clean and smooth user-centric digital solutions.
                            </h6>
                        </div>
                                <div className="herobtncont">
                                    <button className="dbtn"><a href={Resume} download="Nandha_Kumar_B_Resume.pdf">⬇ Download CV</a></button>
                                    <button className="cbtn "><a href="#Contact">📩 Let's Connect</a></button>
                                </div>
                        

                    </div>

                    {/* <div className="photocont">
                        <div className="hanging-wrapper">
                             <div className="string" />
                            <div className="pin" />
                           
                            <div
                                className={`hanging-card ${swinging ? "is-swinging" : ""}`}
                                onClick={handleclick}
                                onAnimationEnd={() => setSwinging(false)}
                            >
                                <img src={profile} alt="Profile Photo" />
                                
                            </div>
                            <p className="text-center" style={{opacity:"0.5", marginTop:"5px"}}>👆Tap to Swing</p>
                        </div>
                    </div> */}
                    <div className="photocont">
                        <div className="hanging-wrapper">
                            <div className="lanyard-clip" />

                            <div
                                className={`hanging-card ${swinging ? "is-swinging" : ""}`}
                                onClick={handleclick}
                                onAnimationEnd={() => setSwinging(false)}
                            >
                                <div className="badge-header">
                                    <span>PORTFOLIO • 2026</span>
                                    <span className="badge-open">● OPEN</span>
                                </div>

                                <div className="badge-photo-box">
                                    <img src={profile} alt="Nandha Kumar B" />
                                </div>

                                <div className="badge-footer">
                                    <h4 className="badge-name">Nandha Kumar B</h4>
                                    <span className="badge-role">FRONTEND & REACT DEV</span>
                                </div>
                            </div>
                            <p className="text-center" style={{ opacity: "0.5", marginTop: "5px" }}>👆Tap to Swing</p>
                        </div>
                    </div>



                </div>


            </div>


            <Skills/>
            <Project/>
            <About/>
            <Contact/>  
          



        </>

    )
}

export default Home
