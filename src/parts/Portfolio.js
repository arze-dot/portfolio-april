import React from 'react'
import Fade from 'react-reveal/Fade'
import Section from 'elements/Section'
import {Card} from 'react-bootstrap'
import Button from 'elements/Button'
import Portfolio01 from 'assets/img/edugears.png'
import Portfolio02 from 'assets/img/money-management.PNG'
import Portfolio03 from 'assets/img/vuejs.jpg'
import { NavLink } from 'react-router-dom'


export default function Portfolio() {
    return (
        <Section isPortfolio id="portfolio">

        <Fade bottom delay={2000}>   
            <div className="container d-flex flex-column">
            <h3 className="display-4 text-light">LET'S SEE MY PORTFOLIO</h3>
            </div>
        </Fade>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
         <Fade bottom delay={2250}>
         <Card style={{ width: '18rem' }} className="my-5">
            <Card.Img variant="top" src={Portfolio01} />
            <Card.Body className="text-center">
                <Card.Title >EDU-GEARS Website</Card.Title>
                <Card.Text >
                Using HTML, CSS, Javascript
                </Card.Text>
                <Card.Text>
                As Front-End Developer
                </Card.Text>
                <a href="https://edu-gears.com">
                   <Button isDanger isDefault>Click Here!</Button>
                  </a >
            </Card.Body>
            </Card>
     
          </Fade>
          <Fade bottom delay={2500}>
          <Card style={{ width: '18rem' }} className="my-5">
            <Card.Img variant="top" src={Portfolio02} />
            <Card.Body className="text-center">
                <Card.Title >Money-Management Web-App</Card.Title>
                <Card.Text >
                Using HTML, CSS, Javascript, PHP
                </Card.Text>
                <Card.Text>
                As Front-End Developer
                </Card.Text>
                <a href="https://www.youtube.com/watch?v=tUSCJVlF_XQ&list=PLjHwLwHwV5avk534rtkp-lF-cwIT2qbZo">

                <Button isDanger isDefault>Click Here!</Button>
                </a>
            </Card.Body>
            </Card>
          </Fade>

          <Fade bottom delay={2750}>
          <Card style={{ width: '18rem' }} className="my-5">
            <Card.Img variant="top" src={Portfolio03} />
            <Card.Body className="text-center">
                <Card.Title >VueJS App BootCamp</Card.Title>
                <Card.Text >
                Using VueJS and Vuetify 
                </Card.Text>
                <Card.Text>
                As Front-End Developer
                </Card.Text>
                <a href="https://dreamy-dijkstra-94b92c.netlify.app/">

                <Button isDanger isDefault>Click Here!</Button>
                </a>
            </Card.Body>
            </Card>
          </Fade>
        </div>
        </Section>
    )
}
