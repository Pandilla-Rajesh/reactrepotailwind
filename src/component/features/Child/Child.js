import React from 'react'
import {Container, Col, Row, Button } from 'react-bootstrap'

const Child = (props) => {

    const {message} = props;

  return (
    <Container>
        <Row>
            <Col lg={6}>
                <h1 className='text-center text-bg-dark '>This is Child Component</h1>
                <p>{message}</p>
                <Button>This is child component</Button>
            </Col>
        </Row>
        </Container>
  )
}

export default Child