import react from "react";

const Navbar = () => {
  return (
    <div id='navbar-container'>
        <div id="sun">
            <div id="sun-title">Nathan Todzy</div>
        </div>

        <div id="navbar"></div>

        <div id="clouds">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="white" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,69.3C672,85,768,107,864,117.3C960,128,1056,128,1152,122.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    
    </div>
  );
}

export default Navbar;