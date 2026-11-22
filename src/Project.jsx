import Home from "./assets/Home.jpg"
import "./Project.css"
import Homepage from "./assets/Homepage.jpg"
import FoodHome from "./assets/FoodHome.jpg"
function Project() {
    return (
        <>
            <div className="container-xl projectmaincont fade-up" id="Project">
                <h6 className="myworkh6">MY WORK</h6>
                <h1 className="featuredproject">Featured Projects</h1>
                <h5 className="projectpara">Real-world applications I've built from scratch — combining design, performance, and clean code.</h5>
                <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 projectrow">

                    <div className="col fade-up projectcol ">
                        <div className="card pcards h-100">
                            {/* <img src={Homepage} alt="" className=" card-img-top pcardimg" /> */}
                            <div className="pcardimg-box">
                                <img src={Homepage} alt="" className="card-img-top pcardimg" />
                            </div>
                            <div className="card-body">
                                <p className="projectp">Project 1</p>
                                <h4 className="card-title projecttitle">
                                    Trendy Chaps - E-Commerce
                                </h4>
                                <p className="card-text projectdis">
                                    A modern e-commerce web application for apparel with a seamless shopping experience. Implements responsive design principles, ensuring the platform works perfectly across all device sizes with clean aesthetics and professional product layouts.
                                </p>

                                <div className="techdiv">
                                    <div className="techitems rounded-pill">React Js</div>
                                    <div className="techitems rounded-pill">Bootstrap</div>
                                    <div className="techitems rounded-pill">JavaScript</div>
                                    <div className="techitems rounded-pill">CSS3</div>
                                    <div className="techitems rounded-pill">HTML5</div>
                                </div>

                                <div className="pbtncont">
                                    <button className="livelink btn btn-dark"><a href="http://trendychaps-project.vercel.app/">🚀 Live Demo</a></button>
                                    <button className="source btn btn-inverse "><a href="https://github.com/nandhakumar102005/Trendychaps-project">😺 Source</a></button>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className="col fade-up">
                        <div className="card pcards h-100">
                            {/* <img src={Home} alt="" className="card-img-top pcardimg" /> */}
                            <div className="pcardimg-box">
                                <img src={Home} alt="" className="card-img-top pcardimg" />
                            </div>
                            <div className="card-body">
                                <p className="projectp">Project 2</p>
                                <h4 className="card-title projecttitle">
                                    Cups & Memories Cafe App
                                </h4>
                                <p className="card-text projectdis">
                                    A fully responsive cafe & reservation web application built with React.js and Bootstrap. Provides users with intuitive menu browsing, table reservation, and seamless category filtering. Deployed live on Vercel with clean component-based UI.
                                </p>
                                <div className="techdiv">
                                    <div className="techitems rounded-pill">React Js</div>
                                    <div className="techitems rounded-pill">Bootstrap</div>
                                    <div className="techitems rounded-pill">JavaScript</div>
                                    <div className="techitems rounded-pill">CSS3</div>
                                    <div className="techitems rounded-pill">HTML5</div>
                                </div>

                                <div className="pbtncont ">
                                    <button className="livelink btn btn-dark"><a href="http://cups-and-memories.vercel.app/">🚀 Live Demo</a></button>
                                    <button className="source btn btn-inverse"><a href="https://github.com/nandhakumar102005/cups-and-memories">😺 Source</a></button>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col fade-up">
                        <div className="card pcards h-100">
                            {/* <img src={FoodHome} alt="" className="card-img-top pcardimg" /> */}
                            <div className="pcardimg-box">
                                <img src={FoodHome} alt="" className="card-img-top pcardimg" />
                            </div>
                            <div className="card-body">
                                <p className="projectp">Project 3</p>
                                <h4 className="card-title projecttitle">
                                    Food Wastage Management System
                                </h4>
                                <p className="card-text projectdis">
                                    A comprehensive full-stack web application designed to minimize urban food waste by connecting food donors (restaurants, hotels) with NGOs in real-time. Features an automated donation workflow, location-based mapping, and a centralized dashboard
                                </p>
                                <div className="techdiv">
                                    <div className="techitems rounded-pill">Java</div>
                                    <div className="techitems rounded-pill">MySQL</div>
                                    <div className="techitems rounded-pill">HTML5</div>
                                    <div className="techitems rounded-pill">CSS3</div>
                                    <div className="techitems rounded-pill">JavaScript</div>
                                    <div className="techitems rounded-pill">Apache Tomcat</div>
                                    <div className="techitems rounded-pill">Maven</div>
                                </div>

                                <div className="pbtncont">
                                    <button className="livelink btn btn-dark">🚀 Live Demo</button>
                                    <button className="source btn btn-inverse"><a href="https://github.com/nandhakumar102005/Food-Wastage-Management-System">😺Source</a></button>
                                </div>

                            </div>
                        </div>
                    </div>





                </div>

                <div className="projectend">
                    <h5>Want to see more of my Work?</h5>
                    <button className="rounded-pill projectendbtn "><a href="https://github.com/nandhakumar102005">😺 View GitHub Profile</a></button>
                </div>
            </div>


        </>
    )
}
export default Project