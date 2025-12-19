import React from "react";
import img1 from "../images/1.jpg"; // Example: Classroom or lecture
import img2 from "../images/2.jpg"; // Example: Workshop
import img3 from "../images/3.jpg"; // Example: Student support
import img4 from "../images/4.jpg"; // Example: Library or volunteering in education

function Campaign() {
  return (
    <div className="campaign">
      <h2>Ongoing Educational Programs</h2>
      <p>We organize programs and workshops to enhance learning and student engagement.</p>
      <div className="gallery">
        <div className="photo">
          <img src={img1} alt="Program 1" />
          <p>STEM Workshop for Young Learners</p>
        </div>
        <div className="photo">
          <img src={img1} alt="Program 1" />
          <p>STEM Workshop for Young Learners</p>
        </div>
        <div className="photo">
          <img src={img2} alt="Program 2" />
          <p>Community Learning Sessions</p>
        </div>
        <div className="photo">
          <img src={img2} alt="Program 2" />
          <p>Community Learning Sessions</p>
        </div>
      </div>

      <h2>Student Support</h2>
      <div className="gallery">
        <div className="photo">
          <img src={img3} alt="Support" />
          <p>Academic Guidance & Mentorship</p>
        </div>
        <div className="photo">
          <img src={img3} alt="Support" />
          <p>Academic Guidance & Mentorship</p>
        </div>
        <div className="photo">
          <img src={img3} alt="Support" />
          <p>Academic Guidance & Mentorship</p>
        </div>
        <div className="photo">
          <img src={img3} alt="Support" />
          <p>Academic Guidance & Mentorship</p>
        </div>
      </div>
      <p>Contact us at 1800-EDU-HELP for guidance and support.</p>

      <h2>Get Involved</h2>
      <div className="gallery">
        <div className="photo">
          <img src={img4} alt="Volunteer" />
          <p>Join our educational initiatives and volunteer as a mentor</p>
        </div>
      </div>
      <p>Sign up to participate in workshops, tutoring, and educational campaigns.</p>
    </div>
  );
}

export default Campaign;
