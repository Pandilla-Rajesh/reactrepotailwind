import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormControl, Row, Table, Modal } from 'react-bootstrap'

const Employeelist = () => {

    const [emplist, setEmplist] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const empGetCall = async () => {
        try {
            const empres = await axios.get('http://localhost:3000/employeelist')
            console.log(empres, "line11")
            setEmplist(empres.data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        empGetCall()
    }, [])


    const empPostCall = async () => {
        const emppayload = {

            empfname: 'Rajesh',
            emplname: 'Pandilla',
            empid: '20210265',
            empemail: 'raj@gmail.com',
        }
        try {

            const empres = await axios.post('http://localhost:3000/employeelist', emppayload)
            console.log(empres, "line11")
            empGetCall()
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {

    }, [])

    const handlePost = () => {
        empPostCall()
    }

    const [handlecheck, setHandlecheck] = useState()
    const [empdata, setEmpdata] = useState({
        empfname: "",
        emplname: "",
        empid: "",
        empemail: ""

    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmpdata({ ...empdata, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/employeelist', empdata);
            setShow(false)
            window.location.reload()
            empGetCall()
        }
        catch(err) {
            console.log(err)
        }
    }

    const handleEdit = (id) => {
        setEmpdata(id ? id : "")
        const res = emplist?.find((list) => list.id === id)
        console.log(res, "line81")
        setShow(true)
        setEmpdata(res)
    }

    const handleDelete = async (id) => {
        try {

            const delres = await axios.delete(`http://localhost:3000/employeelist/${id}`)
            console.log(delres, "line93")
            empGetCall()
        } catch(err) {
            console.log(err)
        }
    }

    const [searchText, setSearchText] = useState()
    // const handleSearch = (el) =>{
    //     const searchText = el.target.value
    //     if(searchText == ""){
    //         empGetCall()
    //         setSearchText("")
    //     }else{
    //         setSearchText(searchText)
    //         const filres = emplist.filter((el)=> el.name.toLowerCase().includes(searchText.toLowerCase())
    //         );
    //         console.log(filres, "line108")
    //         setEmplist(filres);
    //     }
    // }

    const handleSearch = (el) => {
        const searchText = el.target.value;

        if(searchText === "") {
            empGetCall();
            setSearchText("");
            window.location.reload()
        } else {
            setSearchText(searchText);
            const filres = emplist.filter((el) => {
                // Check if el.name exists and is not undefined
                if(el.name && typeof el.name === '') {
                    // Convert both el.name and searchText to lowercase for case-insensitive comparison
                    el.name.toLowerCase().includes(searchText.toLowerCase());
                }
            });
            console.log(filres, "line108");
            setEmplist(filres);
        }
    }



    return (

        <Container>
            <Row className='mt-5'>
                <Col>
                    <h1 className='text-center'>Employee List</h1>
                </Col>
                <Col lg={ 12 }>
                    <div className=' d-flex justify-content-end '>
                        <div><Button className='btn btn-info me-2' onClick={ handleShow }>Add Employee</Button></div>
                        <div>
                            <Form.Group>
                                <FormControl type='text' onChange={ (el) => handleSearch(el) } value={ searchText }
                                    placeholder='Search Employee' />
                            </Form.Group>
                        </div>
                    </div>
                </Col>

                <Col lg={ 12 }>
                    <Table className='my-5 table table-bordered'>
                        <thead>
                            <th>S.No</th>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            { emplist?.length ? emplist?.map((list, i) => (
                                <tr>
                                    <td>{ i + 1 }</td>
                                    <td>{ list.empid }</td>
                                    <td>{ list.empfname }</td>
                                    <td>{ list.emplname }</td>
                                    <td>{ list.empemail }</td>
                                    <td>
                                        <div className=' d-flex '>
                                            <div className=' d-flex me-2'>
                                                <Button className='btn-info btn' onClick={ () => handleEdit(list.id) }>Edit</Button>
                                            </div>
                                            <div className=' d-flex '>
                                                <Button className='btn-danger btn' onClick={ () => handleDelete(list.id) }>Delete</Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            )
                            ) : (
                                <h2 className=' text-danger '>No Data found</h2>
                            )
                            }
                        </tbody>
                    </Table>
                    <div className=''>
                        <Button className='btn btn-success' onClick={ () => handlePost() }>Postcall</Button>
                    </div>
                </Col>

            </Row>

            <>
                <Modal
                    show={ show }
                    onHide={ handleClose }
                    backdrop="static"
                    keyboard={ false }
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Employee List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={ handleSubmit }>


                            <Form.Group>
                                <Form.Label>Employee First Name</Form.Label>
                                <FormControl type='text' onChange={ handleChange } value={ empdata?.empfname } name='empfname' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email Last Name</Form.Label>
                                <FormControl type='text' onChange={ handleChange } name='emplname' value={ empdata?.emplname } />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Employee Id</Form.Label>
                                <FormControl type='text' onChange={ handleChange } name='empid' value={ empdata?.empid } />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Employee Email</Form.Label>
                                <FormControl type='text' onChange={ handleChange } name='empemail' value={ empdata?.empemail } />
                            </Form.Group>
                            <Form.Group className='my-3 d-flex justify-content-end '>
                                <Button className='me-2 btn btn-dark ' onClick={ handleClose }>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>

                    </Modal.Footer>

                </Modal>
            </>


        </Container>

    )
}

export default Employeelist