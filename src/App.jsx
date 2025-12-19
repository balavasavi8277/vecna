import React from "react";
 import {
     BrowserRouter as Router, Routes, Route, Link
     }
      from "react-router-dom"; 
      import Home from "./pages/Home";
       import Campaign from "./pages/Campaign";
        import Register from "./pages/Register";
         import logo from "./images/5.jpg"; 
         import "./App.css";
          
           function App() {
            return ( <Router> <div className="app"> 
            {

            } <header> <img src={logo} alt="Logo" style={{ height: "60px", marginRight: "15px" }} />
             <h1>Empowering Minds: Learn, Grow, and Engage</h1> 
             <nav> <Link to="/">Home</Link>
              <Link to="/campaign">Campaign</Link> 
               <Link to="/register">Register</Link>
                </nav> </header> <main> <Routes> <Route path="/" element={<Home />} />
                 <Route path="/campaign" element={<Campaign />} />
                  <Route path="/register" element={<Register />} /> 
                  </Routes> </main> <footer style={footerStyle}> <p>&copy; 2025 EduPortal. All Rights Reserved.</p>
                   <p>Contact: info@eduportal.com | 1800-EDU-HELP</p>
                    </footer> </div> {
                    
                    /* <-- ADDED */
                    } </Router> ); } const footerStyle = { backgroundColor: "#5393e6", color: "white", textAlign: "center", padding: "20px", marginTop: "40px", }; export default App;