import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Child from '../Child/Child'

const Parent = () => {

const [message, setMessage] = useState('')

const gdata = (data) =>{
    console.log(data, "line10")
}

const handleClick = () =>{
    setMessage(gdata)
}

// useEffect(()=>{
//     setMessage()
// })

  return (
    <Container>
      <Row>
         <Col lg={6}>
            {/* <h1 className='text-center text-bg-info'>This is Parent Component</h1> */}
            <Button onClick={()=>handleClick.gdata}>Click</Button>
            <Child message={message}/>
            
         </Col>
      </Row>
    </Container>
  )
}

export default Parent
