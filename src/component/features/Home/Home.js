import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export const Home = () => {
  // const [pro, setPost] = useState();

    // useEffect(() => {
    //   axios.get(baseURL).then((response) => {
    //     setPost(response.data);
    //     console.log(response.data, 'dummy API')
    //   });
    // }, []);
 
const [contact, setContact] = useState({
  firstname: '',
  lastname: '',
  emailaddress: '',
  phonenumber: '',
  subject: '',
  country: '',
  message: ''

})

// if (!pro) return null;

let obj ={
  firstname: 'rajesh',
  lastname: 'pan',
  emailaddress: 'raj@gmail.com',
  phonenumber: '1234567890',
  subject: 'test subject',
  country: 'india',
  message: 'I am well',
}
const contactform = (event) =>{
  event.preventDefault();
// window.location.reload();
console.log(contact);
setContact({
  firstname: '',
  lastname: '',
  emailaddress: '',
  phonenumber: '',
  subject: '',
  country: '',
  message: '',
});
}

const formhandleChange = (e) =>{
const {name, value} = e.target
setContact({...contact,[name]: value,});
}
const edit=()=>{
  if(
    contact.firstname && 
    contact.lastname && 
    contact.emailaddress && 
    contact.phonenumber && 
    contact.subject && 
    contact.country && 
    contact.message){
    console.log(contact, "submit the details")
    setContact({
      firstname:contact.firstname,
      lastname:contact.lastname,
      emailaddress:contact.emailaddress,
      phonenumber:contact.phonenumber,
      subject:contact.subject,
      country:contact.country,
      message:contact.message,
    });
  }else{
    alert("Please fill the details")
  }

}

const [number, setNumber] = useState("38")

const handleNumber = () =>{
  setNumber("45")
}

    return (
      <Container>
        <Row className='p-5'>

          <Form className='col-12 row' onSubmit={contactform}>
          <Col lg={6}>
          <FormGroup>
            <FormLabel htmlFor=''>First Name</FormLabel>
            <FormControl type='text' name='firstname' value={contact.firstname} onChange={formhandleChange}/>
          </FormGroup>
          </Col>
          
          <Col lg={6}>
          <FormGroup>
            <FormLabel htmlFor='lastname'>Last Name</FormLabel>
            <FormControl type='text' name='lastname'  value={contact.lastname} onChange={formhandleChange}/>
          </FormGroup>
          </Col>

          <Col lg={6}>
          <FormGroup>
            <FormLabel htmlFor='emailaddress'>Email Address</FormLabel>
            <FormControl type='text' name='emailaddress'  value={contact.emailaddress} onChange={formhandleChange}/>
          </FormGroup>
          </Col>

          <Col lg={6}>
          <FormGroup>
            <FormLabel htmlFor='phonenumber'>Phone Number</FormLabel>
            <FormControl type='text' name='phonenumber'  value={contact.phonenumber} onChange={formhandleChange}/>
          </FormGroup>
          </Col>

          <Col lg={6}>
          <FormGroup>
            <FormLabel htmlFor='subject'>Subject</FormLabel>
            <FormControl type='text' name='subject' id='subject' value={contact.subject} onChange={formhandleChange}/>
          </FormGroup>
          </Col>

          <Col lg={6}>
          <FormGroup>
            <FormLabel htmlFor='country'>Country</FormLabel>
            <FormControl type='text' name='country' id='country' value={contact.country} onChange={formhandleChange}/>
          </FormGroup>
          </Col>

          <Col lg={6}>
          <FormGroup>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <FormControl as="textarea" aria-rowspan={3} name='message' id='message' value={contact.message} onChange={formhandleChange}/>
          </FormGroup>
          </Col>
          <Col lg={4}><Button type='submit'>Submit</Button></Col>
          <Col lg={4}><Button type='submit' onClick={edit}>Edit</Button></Col>
          <Col lg={4}><span>{number}</span></Col>
          <Col lg={12}><button onClick={handleNumber}>Click Number</button></Col>
        </Form>

        {/* <Col lg={6}>
          <h1>{pro.id}</h1>
          <h2>{pro.title}</h2>
          <p>{pro.body}</p>
          <h3>{pro.userId}</h3>
        </Col> */}

        </Row>

      </Container>
      
    );

}

export default Home