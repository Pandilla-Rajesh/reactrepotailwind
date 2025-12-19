import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Parent from "../Parent/Parent";

const Test = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  const btnobj = [
    {
      id: 1,
      btnName: "Start",
      action: "startHandle",
      styleName : "btn-success"
      
    },
    {
      id: 2,
      btnName: "Pause",
      action: "pauseHandle",
      styleName : "btn-dark"
    },
    {
      id: 3,
      btnName: "Reset",
      action: "resetHandle",
      styleName : "btn-danger"
    },
  ];
  const [invalidId, setinvalidId] = useState(null);

  const handleAct = (act) => {
    if (act === "startHandle") {
      let id = setInterval(() => {
        setTimer(new Date().toLocaleTimeString());
      }, 1000);
      setinvalidId(id);
    } else if (act === "pauseHandle") {
      clearInterval(invalidId);
    } else if (act === "resetHandle") {
      clearInterval(invalidId);
      setTimer(new Date().toLocaleTimeString());
    }
  };

  const [text, setText]=useState()
  const handleEvent=(e)=>{
    if(e.target.classList, "list-item"){
      setText(e.target.textContent)
    }
  }

  const handleClick = () =>{
    alert('click the button')
    console.log('Button was clicked')
  }

  // Callback-function //
  const names = ["Rajesh", "Ushasri", "Adhya", "Arjun"]
  const namesAll = (animate) =>{
    setTimeout(() => {
      animate(names[0]);
      setTimeout(() => {
        animate(names[1])
        setTimeout(() => {
          animate(names[2])
          setTimeout(() => {
            animate(names[3])
          }, 4000);
        }, 3000);
      }, 1000);
    }, 1000);
  }  

  const animate = (name) =>{
    console.log("animating", name)
  }

  namesAll(animate)

  // end //

  // promises //

  // const emails = ["gmail", "yahoo", "outlook"]
  // const animateOne = (fruit) =>{
  //   return new Promise((res, rej)=>{
  //     setTimeout(() => {
  //       emailnames(fruit)
  //       res(true)
  //     }, 1000);
  //   })
  // }

  // const emailsAll = (emailnames) =>{
  //   animateOne(emails[0], emailnames)
  //   .then(()=>animateOne(emails[1], emailnames))
  //   .then(()=>animateOne(emails[2]), emailnames)
  //   .catch((err)=> console.log(err))
  // }

  // const animateemail = (fruit) =>{
  //   console.log("emails animate", fruit)
  // }

  // emailsAll(animateemail)
 
const handleDeleg = (event) =>{
  const target = event.target
  if(target.matches('li')){
    console.log('list item was cliked')
    setText(event.target.textContent)
  }
}


  // end //

  const eventPre = (e) =>{
    e.preventDefault()
    console.log("click the event prevent default")
  }

  const letters = ['a', 'b', 'c']
  const numbersn = [1,2,3]
  const newnum = letters.concat(numbersn).join('')
  console.log(newnum, "line125")

  const [name, setName] = useState("Rajesh")
  const [show, setShow] = useState(false)
  const clickMe=()=>{
    setShow(!show)
  }

  const isLoggedIn = false
  

  // logical or||

  const [nshow, setnShow] = useState(false)
  const [isshow, setIsShow] = useState(true)


 return (
    <Container>
    <div className="col-sm-3 offset-sm-4 mt-5">
      <div>
        <h1>{timer}</h1>
      </div>
      {btnobj.map((el) => (
        <Button
          key={el.id}
          onClick={() => handleAct(el.action)}
          className={`btn me-3 mt-5 ${el.styleName}`}>
          {el.btnName}
        </Button>
      ))}
    </div>
    {/* <div><Parent/></div> */}

      <div>
        <h2>React Event Delegation</h2>
        <h1>{text}</h1>
        <ul onClick={handleEvent}>
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Services</li>
        </ul>
      </div>

      <div>
        <h2>React Event Delegation</h2>
        <h1>{text}</h1>
        <ul onClick={handleDeleg}>
          <li className="list-item">name1</li>
          <li className="list-item">name2</li>
          <li className="list-item">name3</li>
        </ul>
      </div>

      <div>
        <Button onClick={handleClick}>Click me</Button>
      </div>

      <div>
        <h2>Update the name {name}</h2>
        <button onClick={()=>setName("Pandilla")}>Update state value</button>
      </div>

      <div>{show && <h2>Logical operator</h2>}
      <button onClick={()=>clickMe("rajesh pandilla")}>Click me</button>
      </div>

      <div>
        {isLoggedIn ? "back" : "please loged in first"}
      </div>

      <div>
        {(nshow || isshow) ? <p>logical operators</p>:'rajesh'}
      </div>

      <div>
        <a href="https://example.com" onClick={eventPre}>click me</a>
      </div>

    </Container>
  );
};

export default Test;
