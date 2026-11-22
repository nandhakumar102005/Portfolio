import whatsapp from "./assets/logo.png"
import gmail from "./assets/gmail.png"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github-logo.png"


function Contact(){
    return(
        <>
        <div className=" w-100 container-xxl  fade-up cmaincont" id="Contact">
            <div className="container-xxl">
                 <h6 className="getctext">GET IN TOUCH</h6>
            <h1 className="letsch1">LET'S BUILD <br />
            SOMETHING GREAT.</h1>

            <p className="letscp">I'm currently open to freelance opportunities, collaborations,
                 and full-time roles. Whether you have a project idea
                  or just want to say hi — my inbox is always open!</p>

                 

            </div>

             <div className="container-xxl   row  clogocont">


                    <div className="col">
                        <div className=" ccards">
                            <a href="https://wa.me/918925762992" target="_blank">
                             <img src={whatsapp} alt="" />
                            <p className="text-center logop">WHATSAPP</p>
                            </a>
                           
                        </div>
                    </div>

                     <div className="col">
                        <div className=" ccards">
                            <a href="mailto:nandhakumar102005@gmail.com">
                                  <img src={gmail} alt="" />
                            <p className="text-center logop">G-MAIL</p>

                            </a>
                          
                        </div>
                    </div>

                     <div className="col">
                        <div className=" ccards">
                            <a href="https://www.linkedin.com/in/nandha-kumar-b-4b58a2345/">
                             <img src={linkedin} alt="" />
                            <p className="text-center logop">LINKED IN</p>
                            </a>
                           
                        </div>
                    </div>

                     <div className="col">
                        <div className=" ccards">
                            <a href="https://github.com/nandhakumar102005">
                             <img src={github} alt="" />
                            <p className="text-center logop">GITHUB</p>
                            </a>
                           
                        </div>
                    </div>
                  
                  
                  
                  
                  </div>

                  <div className="backtotop">
                    <a href="#Home">
                        <h5>Back to Top⬆</h5>
                        </a>
                  </div>

                 

                    <div className="rights">
                     <h6>© 2026 Nandha kumar B. All Rights Reserved.</h6>
                    </div>
                  
           

        </div>
        
        </>
    )
}

export default Contact