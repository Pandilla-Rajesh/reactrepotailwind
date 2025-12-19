import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Services = () => {

// const [count, setCount] = useState([]);
// const [totalSummary, setTotalSummary] = useState({});

// const getTotalsummary = () => {

// }

let fruits = ['Apple', 'Banana', 'Orange', 'Rajesh', 'Telangana']

console.log(fruits[0])
console.log(fruits.includes('Rajesh'), "line16");
console.log(fruits.includes('Telangana'), "line17")
// fruits.push('Rajesh', 'Adhya', 'Arjun', 'Ushasri')
// fruits.pop()
// console.log(fruits, "line23")
// console.log(fruits, "line24")

let moreFruits = ['Grapce', 'Oranges', 'Apple']
let allFruits = fruits.concat(moreFruits)
allFruits.push('Onpassive', 'Developer', 'Rajesh', 'Pandilla', 'raj')
allFruits.pop()
allFruits.forEach((index, item)=>{
  document.write(`key:${index} value:${item}<br/>`)
  console.log(allFruits, "line no 30")
}, [])

const names = ['Rajesh', 'Adhya', 'Arjun', 'Ushasri']

const nos = [786, 123, 456, 789]
const pnames = names.concat(nos)
pnames.forEach((item, index) =>{
  document.write(`Name No:${index}, Name:${item}<br/>`)
})
console.log(pnames, nos, "line34")

useEffect(() => {

}, [])

// javascript--concat//

const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];

const numbers = num1.concat(num2,num3)
console.log(numbers,"line54")

numbers.forEach((index, item)=>{
  document.write(`key:${index}, value:${item}<br/>`)
})



function redirectToRelativeUrl(){
  const relativeURL ="https://www.geeksforgeeks.org/"
  const absoluteURL = new URL(relativeURL, window.location.href)
  console.log(absoluteURL.href, "relative url")
  // window.location.href = absoluteURL.href
}

// remove--array-duplicates//

let arrayWithDuplicates = [1,2,3,4,3,5,6,5,8,9,10,5,8]
let uniqArray = [...new Set(arrayWithDuplicates)]
console.log(uniqArray, "line 71")

const arrdup = [1,1,1,2,2,3,3]
const unarr = [...new Set(arrdup)]
console.log(unarr, "line75")


var person = {
  fname:'Rajesh',
  lname:'pandilla',
  dob:'15-8-1986',
  id:1

};
console.log(person, "line88")


// multi--merged--array
const array1 = [{id:1,Name:'Rajesh',Lname:'Pandilla',},]
const array2 = [{id:2,Name:'Ushasri',Lname:'Pandilla',},
    { id: 3, name: 'Adhya', lname:'pandilla' },
    { id: 4, name: 'Arjun', lname:'pandilla' },
    {id:5,name:'Sathyanarayana',Lname:'Pandilla'},
    {id:6,name:'Anasurya',Lname:'Pandilla'}
]
const array3 = [{id:5,name:'Ramraju',Lname:'Pandilla'}]
const map = new Map(
  [array1, array2, array3].flatMap(arr => arr.map(ele => [ele.id, ele]))
)
const mergedArray = Array.from(map.entries())
mergedArray.forEach(([key, value]) => {
  document.write(`merge1-key:${key}, merge-value:${JSON.stringify(value)} <br>`);
});

console.log(mergedArray, "line109")


// spread opeator //

const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];

const numbersCombined = [...numberOne, numberTwo]
document.write(numbersCombined, "spread operator")
console.log(numbersCombined, "line133")

const myColor = {

  brand : 'x',
  modal : 'y',
  color : 'red'

}

const updateColor = {

  brand : 'p',
  modal : 'A',
  color : 'Blue'

}
const updateValue = {...myColor, ...updateColor}
// const outputDiv = document.getElementById('output');
// outputDiv.innerHTML = `<pre>${JSON.stringify(updateValue, null, 2)}</pre>`
console.log(updateValue, 'line148')

// splice //

const spnum = [1, 3, 4, , 6]
console.log(spnum.splice(1,2))
console.log(spnum, "line171")

  return (
    <div>
        <h1>Welcome to the Services component</h1>
        <div id='output'></div>
        <button onClick={redirectToRelativeUrl()}>Redirect URL</button>
    </div>
  )
}

export default Services