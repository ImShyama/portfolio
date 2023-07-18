import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Shyamanand Pandit</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Hi there! 👋 I'm Shyamanand Pandit, a passionate software developer specializing in JavaScript and web development. I love exploring the internet and I'm currently working on JavaScript and Google Apps Scripts. I'm also learning the MERN Stack. Feel free to ask me about JavaScript, Apps Scripts, React, Express, Node, MongoDB, and web development. I have expertise in JavaScript, Apps Scripts, React, Node, MongoDB, and MySQL. You can connect with me on LinkedIn, email, or Twitter. I believe in finding better solutions and seizing opportunities. I look forward to collaborating with fellow developers and working on exciting projects.</p>
          </div>
          <div className="right_container mt-3">
            <img src="shyama.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About