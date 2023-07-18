import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Shyamanand Pandit</h4>
            <p>© {year} Shyamanand Pandit All rights reserved</p>
            <p className='d-flex'>
            <a href="https://www.instagram.com/p.shyama96/" target="_blank" className="text-decoration-none text-light"><i className='fa-brands fa-github'></i></a>
            <a href="https://www.facebook.com/p.shyama96/" target="_blank" className="text-decoration-none text-light"><i className='fa-brands fa-facebook mx-3'></i></a>
            <a href="https://www.instagram.com/p.shyama96/" target="_blank" className="text-decoration-none text-light"><i className='fa-brands fa-instagram'></i></a>
            
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Adarshnagar-10, Birgunj, Madhesh Province, NEPAL</p>
            <p><a href="mailto:p.shyama96@gmail.com" target='_blank' className="text-decoration-none text-light">p.shyama96@gmail.com</a></p>
            <p><a href="tel:+9779811138374" className="text-decoration-none text-light">+977 9811138374</a></p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p><a href="Shyamanand_Resume.pdf" download = "Shyamanand_Resume.pdf" className="text-decoration-none text-light">Resume</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer