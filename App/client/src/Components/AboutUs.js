import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../css/main.css'


export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                About us
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p> We are some geeky Geeks that like to play Dungeons and Dragons.
                                This Web Application is intended to be hub for all things related to maintaining and
                                playing
                                Dungeons and Dragons.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>
                                Features
                            </h2>
                            <p>
                                <li>
                                    A seamless character Creator
                                    <ul>
                                        - Overview over character sheet
                                    </ul>
                                </li>
                                <li>
                                    Inventory management
                                    <ul>
                                        - keep track of all your stuff with automatic weight & encumberance
                                    </ul>
                                </li>
                                <li>
                                    Initiative & Combat Tracking
                                </li>
                            </p>
                        </Col>
                    </Row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://vignette.wikia.nocookie.net/righteoushammerdd/images/b/b6/1454525543499.jpg/revision/latest?cb=20170709232137"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Roll your stats with us</h3>
                                <p>With the most used methods</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://stmed.net/sites/default/files/dungeons-%26-dragons-wallpapers-28127-1513178.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>To war with friends</h3>
                                <p>Your game is just a dice roll Away!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>

            </div>
        )
    }
}

