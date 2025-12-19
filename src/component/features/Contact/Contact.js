import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

const Test = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const getCountries = async () => {
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      // const result = Object.entries(res.data).map(([key, value]) => ({key, value}));
      const result = Object.keys(res.data)
      setCountries(result);
      console.log(res, "line51");
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const [breedlist, setBreedList] = useState([])

  const getBreeds = async () => {
    try {

      const value = await axios.get('https://dog.ceo/api/breeds/list/all')
      const result = Object.keys(value.data.message)
      setBreedList(result)
      console.log(result)
    } catch(error) {
      console.log(error)
    }
  }

  const [getvalB, setGetvalB] = useState('')
  const [urlimg, setUrlImg] = useState('')
  const getValueBreed = async (val) => {
    try {
      const get = await axios.get(`https://dog.ceo/api/breed/${val}/images/random`)
      const result = get.data.message
      setUrlImg(result)
      console.log(get, "line42")
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setGetvalB()
  }, [])

  useEffect(() => {
    getBreeds()
  }, [])


  function one(a, b, c) {
    let val;
    function two(b) {
      val = b * 10
      return val
    }
    function three(c) {
      val = c
      return val
    }

    if(a !== undefined) {
      val = a * 5
    } else if(b !== undefined) {
      two(b)
    } else if(c !== undefined) {
      three(c)
    }
    return val
  }
  console.log(one(10), "line80")

  console.log(typeof 42)
  console.log(typeof 'rajesh')
  console.log(typeof null)
  console.log(typeof undefined)
  console.log(null == undefined)
  let x;
  console.log(x)
  console.log(null == undefined)
  console.log(null === undefined)
  console.log(NaN == null)
  console.log(null === NaN)

  let arr = [1, 1, 1, 1, 1, 0, 0, 0, 0]
  function countArr(arr) {
    let count = {}
    arr.forEach(function (item) {
      count[item] = (count[item] || 0) + 1
    })
    return count
  }
  let res = countArr(arr)
  console.log(res.length)

  function cabackFunction() {
    console.log("iam callback function")
  }

  function highOrderFunction(func) {
    console.log("i am high order function")
    func()
  }
  highOrderFunction(cabackFunction)

  const array = [1, 2, 3, 4, 5]
  const output = arr.map((number) => number += 10)
  console.log(array, "line117")
  console.log(output, "line118")


  // shallow copy //





  return (
    <Container>
      <Row className="my-5">
        <Col lg={ 6 }>
          <h4>Select Country</h4>
          <Form.Group>
            <Form.Select
              value={ selectedCountry }
              onChange={ (e) => setSelectedCountry(e.target.value) }
            >
              <option value={ null }>Select Country</option>
              { countries?.map((country, index) => (
                <option key={ index } value={ country }>{ country }</option>
              )) }
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={ 6 }>
          <h4>Select Breeds</h4>
          <Form.Group>
            <Form.Select value={ getvalB } onChange={ (el) => getValueBreed(el.target.value) }>
              <option value={ null }>Select Breed dogs</option>
              { breedlist?.map((e) => (
                <option value={ e }>{ e }</option>
              )) }
            </Form.Select>
          </Form.Group>
          <div>
            <img src={ urlimg } className="img-fluid" />
          </div>
        </Col>



      </Row>
    </Container>
  );
};

export default Test;
