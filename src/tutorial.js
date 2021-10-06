import React, { Component } from 'react';
import Tutorial from './assets/json/tutorial.json'
import { Link } from 'react-router-dom'

import {
    Container,
    Button,
    Row,
    Col,
    Card,
    Badge
} from 'react-bootstrap'


class tutorial extends Component {
    render() {
        return (
            <>
                <Container className="container p-5">
                    <Row>
                        {

                            Tutorial.map((display, i) => {
                                return (<Col key={i} lg="3" md={2} sm={6} xs={12} >
                                    <Link to={`/display.id`}>
                                        <Card className="my-2" style={{ boxShadow: '0px 0px 5px black' }}>
                                            <div className="imageinner">
                                                <Card.Img variant="top" className="w-100 mx-auto image" style={{ height: '200px' }} src={display.image} />
                                            </div>
                                            <Card.Body className="text-center">
                                                <Card.Title className="h2" style={{ fontFamily: 'font-family: Ubuntu, sans-serif;' }}>{display.title}</Card.Title>
                                                <Card.Text className="text">{display.content}</Card.Text>

                                                <hr />
                                                <Card.Text className="h5 text" style={{ color: 'green' }}>{display.lessons} lessons</Card.Text>

                                                <hr />
                                                <Row className="text">
                                                    <Col lg="6">
                                                        <Card.Text><h5>&#8377;{display.value}  <del style={{ fontSize: "15px", color: "red" }}>&#8377;{display.strike}</del> </h5></Card.Text>
                                                    </Col>
                                                    <Col lg="6">
                                                        <Card.Text><h5>&#9733; {display.star}</h5></Card.Text>
                                                    </Col>
                                                </Row>

                                                <hr />
                                                <Button variant="success" className="w-100">BUY NOW</Button>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                )
                            })
                        }
                    </Row>

                </Container>

            </>
        );
    }
}

export default tutorial;