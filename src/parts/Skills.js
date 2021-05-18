import React, { forwardRef } from 'react'
import Fade from 'react-reveal/Fade'
import Section from 'elements/Section'
import {Card} from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'


const Tombol = forwardRef((props, ref) => {
    return(
        <button className="btn btn-defaul bg-danger" ref={ref}>{props.children}</button>
    )
})

export default function Skills() {
    return (
        <Section isSkills>
           <Fade bottom delay={1850}> 
            <div className="container d-flex flex-column">
            <h3 className="display-4 text-light skills-text">TECHNICAL SKILLS</h3>

            </div>   
            </Fade>
            <div className="container d-flex flex-md-row flex-column justify-content-center align-items-center">
            <Fade bottom delay={2000}>
            <Card style={{ width: '18rem' }} className="mx-5 my-5 text-center">
                <Card.Header className="h5-text">Design</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                            <Tippy content="Since 2019">
                                <Tombol>Adobe XD</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2019">
                                <Tombol>Canva</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2020">
                                <Tombol>Adobe Premier</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2020">
                                <Tombol>Adobe Illustrator</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                </ListGroup>
                </Card>
                            
                </Fade>
                <Fade bottom delay={2000}>
            <Card style={{ width: '18rem', height:'40rem'}} className="mx-5 my-5 text-center">
                <Card.Header className="h5-text">Coding</Card.Header>
                <ListGroup variant="flush">
                <ListGroup.Item>
                            <Tippy content="Since 2016">
                                <Tombol>HTML 5</Tombol>
                            </Tippy>  
                            
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2016">
                                <Tombol>CSS</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2016">
                                <Tombol>Javascript</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2021">
                                <Tombol>ReactJS</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2020">
                                <Tombol>Bootstrap 4</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2019">
                                <Tombol>PHP</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2020">
                                <Tombol>Codeigniter 3</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2021">
                                <Tombol>VueJS</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2021">
                                <Tombol>Vuetify</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                </ListGroup>
                </Card>
                            
                </Fade>
            <Fade bottom delay={2000}>
            <Card style={{ width: '18rem'  }} className="mx-5 my-5 text-center">
                <Card.Header className="h5-text">Electrical</Card.Header>
                <ListGroup variant="flush">
                <ListGroup.Item>
                            <Tippy content="Since 2016">
                                <Tombol>Protheus</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2018">
                                <Tombol>AutoCAD</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2017">
                                <Tombol>Soldering</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2016">
                                <Tombol>Arduino</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                    <ListGroup.Item>
                            <Tippy content="Since 2018">
                                <Tombol>PLC</Tombol>
                            </Tippy>  
                        </ListGroup.Item>
                </ListGroup>
                </Card>
                            
                </Fade>
           
            </div>
           
        </Section>
    )
}
