import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{ color: "#6c63ff" }}>Shyama's Portfolio</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}> I'm Shyamanand Pandit, a passionate software developer specializing in JavaScript and all things web development. With a deep love for exploring the depths of the internet, I thrive on building innovative applications that push the boundaries of technology.</p>
            <div className="btn_div mt-4">
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}><a href="Shyamanand_Resume.pdf" download = "Shyamanand_Resume.pdf" className="text-decoration-none text-light">Resume</a></Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}><a href="https://www.youtube.com" target="_blank" className="text-decoration-none text-light">Youtube</a></Button>
            </div>
          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home