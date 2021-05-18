import React from 'react'
import Fade from 'react-reveal/Fade'
import Section from 'elements/Section'
export default function About() {
    return (
        <Section isAbout isMarginBottom id="about">
            <Fade bottom delay={1000}>
              <div className="container d-flex flex-column">
               <h3 className="display-4 text-light">C'MON I'LL TELL U <br></br> SOMETHING</h3>
            </div>
            </Fade>
            <div className="container container-about">
                   <Fade bottom delay={1250}>
                    <div className="container container-details">
                    <h4 className="text-light float-left">About Me</h4>
                    <span></span>
                    <p className="text-light">Hai! Good to see you, I'm Ezra. A newbie front-end developer that passion at coding and design. 
                    Also really interested in IoT using Arduino, Wemos, and some sensors. I am open to work as a Front-End 
                    Developer and IoT Engineer . Continuous improvement is my habits so I am still developing myself in 
                    ReactJS, VueJS and also server-side library such as NodeJS. Fullstack-Developer in JavaScript is my GOAL. </p>
                    </div>
                    </Fade>
                    <Fade bottom delay={1500}>
                    <div className="container container-details">
                    <h4 className="text-light float-left">Education</h4>
                    <span></span>
                    <p className="text-light">Jayabaya University (Electrical Engineering - Electronics) ~ 3.76 GPA <br></br>
                    - Final Assignment : "Shelft Tools Automated Recorded Data Using Wemos and Webserver"</p>
                    <p className="text-light">Pasar Rebo Training Institute (BLK Pasar Rebo - Industrial Electronics) <br></br>
                    - Training to be "Trained Operator Electrical Industrial Complex"</p>
                    </div>
                    </Fade>
                    <Fade bottom delay={1750}>
                    <div className="container container-details">
                    <h4 className="text-light float-left">Experience</h4>
                    <span></span>
                    <p className="text-light">PT. Toyota Motor Manufacturing Indonesia (Internsip) - (2019 Feb - April) <br></br>
                    - Shelf Tools Automated Project Using Mitsubishi PLC ( as a PLC Programmer)</p>
                    <p className="text-light">PT. Mercedez-Benz Indonesia (Internship) - (2019 August - September) <br></br>
                    - Redraw the electrical wiring of all building in factory</p>
                    <p className="text-light">PT. Yasa Expansia Sejahtera (PLN Cibinong) - (2020 July - November) <br></br>
                    - P2TL Technician : Analyze customer electricity measuring equipment and find a possible fraud</p>
                    <p className="text-light">PT. Tokai Dharma Indoneisa (Utility Staff) - (2020 November - 2021 January) <br></br>
                    - Do improvements, make sure the electrical works of all machine doing fine, and troubleshoot electrical parts.</p>
                    </div>
                    </Fade>
                    <Fade bottom delay={2000}>
                    <div className="container container-details">
                    <h4 className="text-light float-left">Certificates</h4>
                    <span></span>
                    <p className="text-light">~ TOEFL (LIA) - Score : 475 <br></br></p>
                    <p className="text-light">~ P2TL Certificates of Competence</p>
                    </div>
                    </Fade>
                    <Fade bottom delay={2250}>
                    <div className="container container-details">
                    <h4 className="text-light float-left">Achievements</h4>
                    <span></span>
                    <p className="text-light">~ Jayabaya University Best Graduate of 2020 Faculty of Industrial Engineering</p>
                    <p className="text-light">~ Pasar Rebo Training Institute Best Graduate Electrical Industry Department 2018</p>
                    </div>
                    </Fade>
                    <Fade bottom delay={2450}>
                    <div className="container container-details">
                    <h4 className="text-light float-left">Organization</h4>
                    <span></span>
                    <p className="text-light">POSA Vice-Coordinator of Campus C<br></br>
                    - Conduct worship every Friday <br></br>
                    - Head Committee of Ibadah Padang at Wiladautika August 2018
                    </p>
                    </div>
                    </Fade>
                </div>
           
        </Section>
    )
}
