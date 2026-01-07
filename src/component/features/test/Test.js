import React, { useCallback, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

function ReactMainTopics() {

  // time-interval-function //
  const [time, setTime] = useState(0)
  const [currentdate, setCurrentDate] = useState(new Date())
  const [isruning, setIsRuning] = useState(false)
  const [loading, setLoading] = useState(false)


  // boolean-values //

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const content = `
  
  1. Some quick example text to build on the card 
  title and make up the bulk of the card's content.
  2. Some quick example text to build on the card 
  title and make up the bulk of the card's content.
  
  `

  // end //



  // handlers //

  const handleStart = useCallback(() => {
    setIsRuning(true)
  }, [])

  const handleStop = useCallback(() => {
    setIsRuning(false)
  })

  const handleReset = useCallback(() => {
    setTime(0)
    setIsRuning(false)
  })

  // with-out-useeffect //

  const runTime = async () => {
    setLoading(true)
    try {

      let timeout;
      if(isruning) {
        timeout = setTimeout(() => {
          setTime((value) => value + 1)
          setCurrentDate(new Date())
        }, 100)
      }

      return () => clearTimeout(timeout)

    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runTime()
  }, [isruning, time])

  // with--useEffect //

  useEffect(() => {
    let timeInterval;
    if(isruning) {
      timeInterval = setTimeout(() => {
        setTime((prev) => prev + 1)
        setCurrentDate(new Date())
      }, 100)
    }
    return () => clearTimeout(timeInterval)
  }, [isruning, time])

  // end //

  // end //

  // end //

  return (

    <section className='info-suggestion-wrapper'>
      <Container>
        <Row className=' align-items-center justify-content-center g-2'>
          <Col lg={ 12 }>
            <div className='info-head'>
              <h2>Welcome to the React Main Topics</h2>
            </div>
          </Col>

          <Col lg={ 4 }>
            <Card>
              <CardHeader>
                <Card.Title className='text-center'>
                  Timer Interview Function
                </Card.Title>
              </CardHeader>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className=' flex items-center justify-center gap-2'>
                  { loading ? (
                    <p>...Loading</p>
                  ) : (
                    <>
                      <h5 className=' text-blue-700'>Time: { time }</h5>
                      <hr className=' bg-slate-500 h-2' />
                      <h5 className='text-green-700'>Date: { currentdate.toLocaleString() }</h5>
                    </>
                  ) }

                </div>
                <div className=' d-flex align-content-center justify-content-center gap-2'>
                  <Button onClick={ handleStart }>Start</Button>
                  <Button onClick={ handleStop } variant='danger'>Stop</Button>
                  <Button onClick={ handleReset } variant='secondary'>Reset</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={ 4 }>
            <Card>
              <CardHeader>
                <Card.Title className='text-center'>
                  Boolean Values
                </Card.Title>
              </CardHeader>
              <Card.Body>
                <Card.Text
                  className={ `overflow-hidden transition-all ease-in-out whitespace-pre-line
               ${show ? 'max-h-[200px]' : 'max-h-[60px]'}` }>
                  { content }
                </Card.Text>
                <Button onClick={ handleShow }>
                  { show ? 'show Less' : 'Show more' }
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>

  )

}

export default ReactMainTopics