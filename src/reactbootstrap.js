import React from 'react'

//Import JSON DATA INTO REACT MODULE
import ProductData from './assets/json/products.json'

//import Button from 'react-bootstrap/Button'

import {
    Container,
    Button,
    Row,
    Col,
    Card,
} from 'react-bootstrap'


export default class RBUI extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <Container className="container p-5">
                <Row>

                    {
                        ProductData.map((res, i) => {
                            return (<Col key={i} lg="3" md={2} sm={6} xs={12}>
                                <Card className="my-2">
                                    <Card.Img variant="top" className="w-75 mx-auto my-2" style={{
                                        height: '200px'
                                    }} src={res.image} />
                                    <Card.Body className="text-center">
                                        <Card.Title className="h6">{res.id}.{res.title.slice(0, 20)}</Card.Title>
                                        <Card.Title>{res.category}</Card.Title>
                                        <Card.Text>{res.price}</Card.Text>
                                        <Button variant="primary">BUY NOW</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })
                    }
                </Row>

            </Container>
        </>)
    }

}