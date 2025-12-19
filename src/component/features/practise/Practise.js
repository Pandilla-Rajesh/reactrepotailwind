import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Practise = () => {
 // array-duplicates
 const arrayWithDuplicates = [1,1,2,2,3,3,4]
 const arrayUniq = [...new Set(arrayWithDuplicates)]
 console.log(arrayUniq, "line9")
// array-with-duplicates
 const arrduplicates = ["raj", "raj", "usha", "usha", "adhya", "adhya", "arjun", "arjun"]
 const arrUniq = [...new Set(arrduplicates)]
 console.log(arrUniq, "line13")
// end //

 // array-with-duplicates-count
 const countarr = {}
 const simarr = ["raj1", "raj2", "usha3", "usha4", "adhya5", "adhya6", "arjun7", "arjun8"]
 simarr.forEach(function(x){countarr[x] = (countarr[x] || 0) +1})
 console.log(countarr, "line16 ")

 // array-with-duplicates-count
 const arrCount = {}
 const sampleArray = ['a', 'a', 'b', 'c', 'd', 'c', 'e', 'e', 'd', 'a', 'f', 'f']
 sampleArray.forEach(function(y) {arrCount[y] = (arrCount[y] || 0) +1})
 console.log(arrCount, "line14")

 // Callback function, passed as a parameter in the higher order function
function callbackFunction(data){
  
 console.log('I am  a callback function', data);
}

// higher order function
function higherOrderFunction(func){
  let data = "I am higher order function"
 console.log(data,'I am higher order function')
 func(data)
}

higherOrderFunction(callbackFunction);

// input-uppercase
function upperCase(){
 const x =document.getElementById("fname")
 x.value = x.value.toUpperCase()
}

// input-lowercase
function loweerCase(){
 let y = document.getElementById('lname');
 y.value = y.value.toLowerCase()
}

// Prints a simple multidimensional array in JavaScript

const arr1 = ["Raj", 38, 100000];
const arr2 = ["Arjun", 40, 200000];
const arr3 = ["Adhya", 30, 400000];

const salary = [arr1, arr2, arr3]
for(let i = [0]; i<=salary.length; i++){
  console.log(salary[i], "line63")
}


// for(let i =[2]; i<salary.length; i++){
//   console.log(salary[i],"line64")
// }

let salnumber = [
 
  ["A", 20, 20000],
  ["B", 30, 30000],
  ["C", 35, 45000],

]

for(let i = [0]; i < salary.length; i++){
 console.log(salnumber[i], "line81")
}


// min and max value//

function findMinMax() {
 let Arr = [80, 100, 90, 10, 5, 20, 30, 60]
 let minValue = Math.min(...Arr)
 let maxValue = Math.max(...Arr)

//  let minValue = Infinity;
//  let maxValue = Infinity;

 for(let item of Arr){
   // find minvalue//
   if(item < minValue)
   minValue = item;

   // find maxvalue
   if(item < maxValue)
   maxValue = item

 }

 console.log("Minmum element value" + minValue, "line75")
 console.log("max element value" + maxValue, "line76")
}findMinMax()

// operators //

// const x = 100
// const y = '10'
const x = true
const y = '100'

console.log(x == y, "line98")

const [listB, setListb] = useState()
const [getvalB, setgetvalB] = useState()

useEffect(() =>{
 setgetvalB()
})

const getListDogs = async () =>{
 const res =await axios.get('https://dog.ceo/api/breeds/list/all')
 const result= Object.keys(res.data.message);
 setListb(result)
}

useEffect(()=>{
 getListDogs()
}, [])

console.log(listB)

const getVlaueBreeed= async(val)=>{
 const res =await axios.get(`https://dog.ceo/api/breed/${val}/images/random`)
 const result= res.data.message;
 console.log(result)
 setImgUrl(result)
}
const [imgurl, setImgUrl] = useState('')

const [users, setUsers] = useState('')
const getUsers = async() =>{
 try{
   const response = await axios.get('https://reqres.in/api/users?page=2');
   setUsers(response.data.data)
   console.log(response, "line138 users data")
 } catch(error){
   console.error('enter fetching data', error)
 }
}

useEffect(() =>{
 getUsers()
}, [])

let arrayDupli = [1,2,3,2,5,4,5,6,2]
let uniqArrayNew = [...new Set(arrayDupli)]
console.log(uniqArrayNew, "line162")

let countArr = {}
let arrsample = [1,2,3,2,5,4,5,6,2]
arrsample.forEach(function(r) {countArr[r] = (countArr[r] || 0)+1})
console.log(countArr,"line167")

// const getId = new Date().toLocaleDateString().split("T")[0]
// document.getElementById("dob").setAttribute("max", getId)
// // console.log(getD, "line170")
// console.log(today, "line172")


 return (
   <Container>
     <Row>
       <Col>
         <h1>Array function</h1>
          <div>
            <input type="date" name="dob" id="dob" max="" required />
          </div>
       </Col>
       <Col>
         <Form.Group>
             <Form.Label>Input filed toUpperCase</Form.Label>
             <Form.Control id="fname" onInput={upperCase}></Form.Control>
         </Form.Group>
       </Col>
       <Col>
         <Form.Group>
           <Form.Label>Input field toLoweercase</Form.Label>
           <Form.Control id='lname' onInput={loweerCase}></Form.Control>
         </Form.Group>
       </Col>
     </Row>

     <Row>
       <Col>
         <Form.Select value={getvalB} onChange={(e)=>getVlaueBreeed(e.target.value)}>
          <option value={""}>Select Breeed</option>
           {listB && listB?.map((el)=>{
           return (
            <option value={el}>{el}</option>
           )
           })}
         </Form.Select>
         <img src={imgurl} className='img-fluid' />
       </Col>
       <Col></Col>
     </Row>

     {/* Users-list */}

     <Row>
      {users ?.length ? users?.map((item, index)=>{
        return (
          <Col lg={4}>
             <h3 key={index}>{item.first_name}</h3>
             <h4>{item.last_name}</h4>
             <h5>{item.email}</h5>
             <span><img src={item.avatar} /></span>
          </Col>
        )
      }):(
        <div></div>
      )}
     </Row>

     {/* end */}

   </Container>
 )
}

export default Practise