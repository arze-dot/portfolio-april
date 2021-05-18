import React from 'react'
import Button from 'elements/Button'
import Section from 'elements/Section'

import Fade from 'react-reveal/Fade'
import Foto from 'assets/img/foto.png'

export default function Contact() {
    return (
        <Section isContact id="contact">
            <Fade bottom delay={2000}>
             <div className="container d-flex flex-column justify-content-center align-items-center w-50 mt-5">

            <h1 className="text-light text-center text-writer">CONTACT OR HIRE ME</h1>
            <div className="d-flex flex-sm-row flex-column mt-5">
            <div className="right d-flex flex-column align-items-center mx-5">
                <a href="https://drive.google.com/file/d/1ErvE-aPocN9bWlBcACKM57f7gURir05N/view?usp=sharing">

                <Button isDanger isDefault isJustify isMarginTop>Download CV</Button>
                </a>
                <h5 className="text-center text-light mt-3">ezrasenaputra@gmail.com</h5>
                <h5 className="text-center text-light">085155321462</h5>
            </div>
            <div className="left d-flex justify-content-center align-items-center my-2">
                <img src={Foto}  width="150px" alt=""></img>
            </div>
            </div>
            </div>
            </Fade>
        </Section >
    )
}
