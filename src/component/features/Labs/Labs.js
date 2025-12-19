import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Labs = () => {
  const [fdata, setDatalist] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputsData, setinputsData] = useState({
    name: "",
    pnumber: "",
    age: "",
  });

  // get-call //
  const getCall = async () => {
    try {
      const res = await axios.get("http://localhost:3000/data");
      setDatalist(res.data);
      console.log(res, "getcall");
    } catch(err) {
      console.log(err);
    }
  };
  const [check, setcheck] = useState();
  useEffect(() => {
    getCall();
  }, []);

  // end //

  // Post-call //
  const PostCall = async (paylod) => {
    try {
      const res = await axios.post("http://localhost:3000/data", paylod);
      getCall();
      console.log(res, "line32")
    } catch(err) {
      console.log(err);
    }
  };

  // end //

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputsData({ ...inputsData, [name]: value });
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(inputsData, "inputsData");
    if(check) {
      try {
        const re = axios.post(
          `http://localhost:3000/data/${check}/`,
          inputsData
        );
        setShow(false);
        window.location.reload();
      } catch(err) {
        console.log(err);
      }
    } else {
      PostCall(inputsData);
      handleClose(false);
    }
  };

  const postDelete = async (id) => {
    try {
      const delres = await axios.delete(`http://localhost:3000/data/${id}`);
      getCall();
    } catch(err) {
      console.log(err);
    }
  };
  const postEdit = (id) => {
    setcheck(id ? id : "");
    const res = fdata?.find((el) => el.id === id);
    console.log(res, "edit");
    setShow(true);
    setinputsData(res);
  };

  const [searchText, setsearchText] = useState();

  const handleSearch = (e) => {
    const searchText = e.target.value;
    if(searchText == "") {
      getCall();
      setsearchText("");
    } else {
      setsearchText(searchText);
      const filres = fdata.filter((el) =>
        el.name.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filres, "filresfilresfilresfilres");
      setDatalist(filres);
    }
  };

  console.log(searchText, "searchText");
  const [sortingOrder, setSortingOrder] = useState("asc");
  const handleSort = (val) => {
    const sortedData = [...fdata];
    const isAscending = sortingOrder === "asc";
    const sorted = sortedData.sort((a, b) => {
      if(isAscending) {
        return a[val].localeCompare(b[val]);
      } else {
        return b[val].localeCompare(a[val]);
      }
    });
    console.log(val);
    setSortingOrder(isAscending ? "desc" : "asc");
    setDatalist(sorted);
  };

  const itemsPerPage = 5;
  const totalItems = fdata.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationLinks = [];
  for(let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <li key={ i }>
        <button
          className="btn btn-danger btn-sm me-2"
          href="#"
          onClick={ () => handlePageClick(i) }
        >
          { i }
        </button>
      </li>
    );
  }

  const [paginationNumber, setPagnationNumber] = useState(1);
  const handlePageClick = (i) => {
    setPagnationNumber(i);
  };
  const startIndex = (paginationNumber - 1) * itemsPerPage;

  const handlePreviousClick = () => {
    if(paginationNumber > 1) {
      setPagnationNumber(paginationNumber - 1);
      handlePageClick(paginationNumber - 1);
    }
  };

  const handleNextClick = () => {
    if(paginationNumber < totalPages) {
      setPagnationNumber(paginationNumber + 1);
      handlePageClick(paginationNumber + 1);
    }
  };

  return (
    <Container>
      <div className="d-flex  justify-content-between  align-content-lg-center ">
        <Button variant="primary" onClick={ handleShow }>
          Add Data
        </Button>
        <Form.Control
          type="text"
          placeholder="name"
          onChange={ (e) => handleSearch(e) }
          className="w-25"
          value={ searchText }
        />
      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <th>S.NO</th>
          <th>Id</th>
          <th className="position-relative ">
            Name
            <button
              className="btn position-absolute  p-0 ms-2"
              onClick={ () => handleSort("name") }
            >
              { sortingOrder == "asc" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sort-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sort-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
              ) }
            </button>
          </th>
          <th className="position-relative ">
            phonenumber
            <button
              className="btn position-absolute  p-0 ms-2"
              onClick={ () => handleSort("pnumber") }
            >
              { sortingOrder == "asc" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sort-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sort-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
              ) }
            </button>
          </th>
          <th className="position-relative ">
            Age
            <button
              className="btn position-absolute  p-0 ms-2"
              onClick={ () => handleSort("age") }
            >
              { sortingOrder == "asc" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sort-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sort-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
              ) }
            </button>
          </th>
          <th>Action</th>
        </thead>
        <tbody>
          { fdata &&
            fdata.slice(startIndex, startIndex + itemsPerPage)?.map((el, i) => {
              return (
                <>
                  <tr>
                    <td>{ i + 1 }</td>
                    <td>{ el.id }</td>
                    <td>{ el.name }</td>
                    <td>{ el.pnumber }</td>
                    <td>{ el.age }</td>
                    <td>
                      <button
                        className="btn bg-info btn-sm"
                        onClick={ () => postEdit(el.id) }
                      >
                        Edit
                      </button>
                      <button
                        className="btn bg-danger btn-sm"
                        onClick={ () => postDelete(el.id) }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            }) }
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <div className="d-flex">
          <ul className="pagination">
            <li>
              <button
                className={ `btn btn-info btn-sm ${paginationNumber === 1 ? "disabled" : ""
                  }` }
                onClick={ handlePreviousClick }
              >
                Previous
              </button>
            </li>
            { paginationLinks }
            <li>
              <button
                className={ `btn btn-info btn-sm ${paginationNumber === totalPages ? "disabled" : ""
                  }` }
                onClick={ handleNextClick }
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <>
        <Modal show={ show } onHide={ handleClose }>
          <Modal.Header closeButton>
            <Modal.Title>Add Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={ hadleSubmit }>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  onChange={ handleChange }
                  value={ inputsData?.name }
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>phonenumber</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="pnumber"
                  onChange={ handleChange }
                  value={ inputsData?.pnumber }
                  name="pnumber"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="age"
                  onChange={ handleChange }
                  value={ inputsData?.age }
                  name="age"
                />
              </Form.Group>
              <Button type="submit" variant="primary" onClick={ handleShow }>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
      {/* end */ }
    </Container>
  );
};

export default Labs;
