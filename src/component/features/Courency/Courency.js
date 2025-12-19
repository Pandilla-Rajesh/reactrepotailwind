import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

const Courency = () => {
  const [inputcureency, setInputCureency]=useState('')
  const [amount, setAmount] = useState('')
  const getInval = () =>{
    setAmount()
  }
  useEffect(()=>{
    getInval()
  }, [])
  const getCurrency = async () =>{
    try{
      const res = await axios.get('https://api.frankfurter.app/currencies')
      setInputCureency(res.data)
      console.log(res.data, "line63")
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getCurrency()
  }, [])
  console.log(inputcureency,"inputcureency")
  return (
    <Container>
        <Row>
        <Col>
           <Form.Group>
              <Form.Label>Amount</Form.Label>
              <FormControl type="text" value={amount} onChange={(e)=>getInval(e.target.value)} />
           </Form.Group>
        </Col>
        <Col>
           <Form.Group>
              <Form.Label>Form</Form.Label>
             <Form.Select>
              <option>select currency</option>
              {inputcureency && Object.keys(inputcureency)?.map((el,index)=>{
                return <option key={index} value={el}>{el} - {inputcureency[el]}</option>
              })}
         
             </Form.Select>
           </Form.Group>
        </Col>
        <Col>
           <Form.Group>
              <Form.Label>To</Form.Label>
              <FormControl type="text" />
           </Form.Group>
        </Col>
        </Row>
    </Container>
  )
}

export default Courency