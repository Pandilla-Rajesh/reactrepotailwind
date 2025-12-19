import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Aboutus = () => {
    const alertName=()=>{
        alert('Hi Arjun')
    }
    const [count, setCount] = useState(0)
    const incrementCount = () => {
      setCount(count + 1)
    }
 
    const decrementCount = () => {
      if(count !==0){
        setCount(count - 1)
      }
    }

    // sum-value//
    const num1 = 5
    const num2 = 5
    const num3 = 5
    const sum = num1 + num2 + num3
    console.log('this value is sum' + num1 +  num2 + num3 + 'is:' + sum, 'line23')
    // end //

    // event-deligation//
    const [list, setList] = useState(null);

    useEffect(() => {
      const listElement = document.querySelector('.list');
      setList(listElement);
    }, []);
  
    useEffect(() => {
      if (list) {
        list.addEventListener('click', handleClick);
        return () => {
          list.removeEventListener('click', handleClick);
        };
      }
    }, [list]);

    const handleClick=(e)=>{
      console.log(e.target.className)
      window.location.href="/" + e.target.className
    }
  
    // list.addEventListener('click',function(e){
    //   if(e.target && e.target.className){
    //     window.location.href="/" + e.target.className
    //   }
    // })

    // end //

      const [timer, setTimer] = useState(null);
      const [minutes, setMinutes] = useState(0);
      const [seconds, setSeconds] = useState(0);
      const [isRunning, setIsRunning] = useState(false);
    
      useEffect(() => {
        if (isRunning) {
          setTimer(
            setInterval(() => {
              if (seconds === 0 && minutes === 0) {
                clearInterval(timer);
                setIsRunning(false);
              } else {
                setSeconds(prevSeconds => {
                  if (prevSeconds === 0) {
                    setMinutes(prevMinutes => prevMinutes - 1);
                    return 59;
                  } else {
                    return prevSeconds - 1;
                  }
                });
              }
            }, 1000)
          );
        } else {
          clearInterval(timer);
        }
        return () => clearInterval(timer);
      }, [isRunning, minutes, seconds]);
    
      const handleStart = () => {
        setIsRunning(true);
      };
    
      const handlePauseResume = () => {
        setIsRunning(prevState => !prevState);
      };
    
      const handleReset = () => {
        clearInterval(timer);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
      };


// const arr1=arraywraper=([1,2,3])
// const arr2=arraywraper=([4,5,6])
// result=arr1+arr2
// console.log(result, "line107")


const [timeval, setTimeval] = useState(new Date().toLocaleDateString())

const startHandle = () => {

}

const pauseHandle = () => {

}

const resetHandle = () => {

}


    
      return (

<Container>
<Row>
  <Col lg={12} className='my-5'>
  <label>
            <input type="number" value={minutes} onChange={e => setMinutes(parseInt(e.target.value))} />
            Minutes
          </label>
          <label>
            <input type="number" value={seconds} onChange={e => setSeconds(parseInt(e.target.value))} />
            Seconds
          </label>
    
          <button onClick={handleStart}>START</button>
          <button onClick={handlePauseResume}>{isRunning ? 'PAUSE' : 'RESUME'}</button>
          <button onClick={handleReset}>RESET</button>
    
          <h1 data-testid="running-clock">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
  </Col>
  <Col className='my-5' lg={12}>
  <h1 className='text-center'>Welcome to the About us Component</h1>
  </Col>
    <Col className='d-flex justify-content-end align-items-center'>
    <div>
  <button onClick={(alertName)} className='btn btn-danger me-3'>alert name</button>
  </div>
      <div className="">
      <button onClick={(incrementCount)} className='btn btn-info me-2'>Click Here One</button>
      {count}
    </div>
    <div className='app'>
        <button onClick={(decrementCount)} className='btn btn-dark text-white me-3'>Click Here Two</button>
        {count}
    </div>
    </Col>
    <Col className='list' lg={12}>
      <span>Home</span>
      <span>About Us</span>
      <span>Services</span>
      <span>Contact</span>
    </Col>
    <Col lg={12} >
      <div >
        <span>{timeval}</span>
      <Button onClick={startHandle} className='btn btn-danger me-3'>Start</Button>
      <Button onClick={pauseHandle} className='btn btn-dark me-3'>Pause</Button>
      <Button onClick={resetHandle} className='btn btn-info '>Reset</Button>
      </div>
    </Col>
  </Row>
</Container>

      )

    }

  export default Aboutus