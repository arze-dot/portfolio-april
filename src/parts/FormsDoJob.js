import React from 'react'
import Button from 'elements/Button'
import Section from 'elements/Section'
import Fade from 'react-reveal/Fade'

export default function FormsDoJob() {
    return (
        <Section isFormsHireMe isMarginBottom id="hire">
           <Fade bottom delay={1000}>
            <div className="container d-flex flex-row justify-content-center align-items-center">
            
            <h1 className="text-light text-center text-writer">DO JOBS WITH ME?</h1>

          </div>

          <div className="container-sm d-flex flex-column justify-content-center w-50 mt-5">
            
            <input className="form-control bg-dark mt-4" type="text" placeholder="Your Name"></input>
            <input className="form-control bg-dark mt-4" type="text" placeholder="Email"></input>
            <input className="form-control bg-dark mt-4" type="text" placeholder="Phone Number"></input>
            <a href="https://wa.link/03iu35">

            <Button isDanger isDefault isJustify isMarginTop>Submit</Button>
            </a>

          </div>   
          </Fade>         
        </Section>
    )
}
