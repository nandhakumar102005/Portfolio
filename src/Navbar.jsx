// import { useRef } from "react";
// function Navbar() {

//     const menuRef = useRef(null);

// const closeMenu = () => {
//     const menu = menuRef.current;

//     if (menu && window.innerWidth < 768) {
//         const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(menu);
//         bsCollapse.hide();
//     }
// };
//     return (
//         <>
//             <div className="navbar navbar-expand-md">

//                 <div className="container-xxl" style={{ padding: "0px 20px" }}>
//                     <a href="" className="navbar-brand d-flex align-items-center">
//                         <h3 id="brandname">NK</h3>
//                     </a>

//                     <button className="navbar-toggler " data-bs-target="#links"   data-bs-toggle="collapse">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>


//                     <div id="links" ref={menuRef} className="collapse navbar-collapse justify-content-around text-center ">
//                         <ul className="navbar-nav text-align-center menus">

//                             <li className="nav-item">
//                                 <a href="#Home" onClick={closeMenu} 
//                                    className="nav-link">Home</a>
//                             </li>

//                             <li className="nav-item">
//                                 <a href="#Skills" onClick={closeMenu}
//                                      className="nav-link">Skills</a>
//                             </li>

//                             <li className="nav-item">
//                                 <a href="#Project" onClick={closeMenu}
//                                     className="nav-link">My Works</a>
//                             </li>

//                             <li className="nav-item">
//                                 <a href="#About" onClick={closeMenu}
//                                      className="nav-link">About Us</a>
//                             </li>

//                             <li className="nav-item">
//                                 <a href="#Contact" onClick={closeMenu}
//                                      className="nav-link">Contact Us</a>
//                             </li>
//                         </ul>
//                     </div>

//                 </div>

//             </div>



//         </>
//     )
// }

// export default Navbar

import { useState } from "react";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="navbar navbar-expand-md">

            <div className="container-xxl" style={{ padding: "0px 20px" }}>

                <a href="#Home" className="navbar-brand d-flex align-items-center">
                    <h3 id="brandname">NK</h3>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-around text-center ${isOpen ? "show" : ""}`}>

                    <ul className="navbar-nav menus">

                        <li className="nav-item">
                            <a href="#Home" onClick={closeMenu} className="nav-link">Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="#Skills" onClick={closeMenu} className="nav-link">Skills</a>
                        </li>

                        <li className="nav-item">
                            <a href="#Project" onClick={closeMenu} className="nav-link">My Works</a>
                        </li>

                        <li className="nav-item">
                            <a href="#About" onClick={closeMenu} className="nav-link">About</a>
                        </li>

                        <li className="nav-item">
                            <a href="#Contact" onClick={closeMenu} className="nav-link">Contact</a>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
