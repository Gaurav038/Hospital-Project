import React from "react";
import "../../components/Doctor/Doctor.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import img from "../../image/drNew.png";
import "./DoctorL.css"

function DoctorL() {
  return (

    <div className="container">
        <Navbar />
      <section className="doctors doctorsL" id="doctors">
        <h1 className="heading headingPage">
          {" "}
          our <span>doctors</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h4>john deo</h4>
            <span>expert doctor</span>
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  );
}

export default DoctorL;
