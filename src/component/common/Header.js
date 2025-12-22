import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Header = () => {

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)



  const fetchCategorie = async () => {
    setLoading(true)
    try {

      const response = await fetch('https://dummyjson.com/products/categories')
      const data = await response.json()
      setCategories(data)
      console.log(data, 'categories product')

    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategorie()
  }, [])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://www.tempestadvertising.com/wp-content/uploads/2021/11/tempest-branding.png"
            loading='lazy' alt="brand-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav me-3'>
            <li className='nav-item dropdown'>
              <button className='btn dropdown-toggle nav-link'
                data-bs-toggle="dropdown">
                Categories
              </button>
              <ul className="dropdown-menu">
                { loading && (
                  <li className=' dropdown-item text-muted'>
                    <p>...Loading</p>
                  </li>
                ) }

                { loading ? (
                  <p>...Loading</p>
                ) :
                  categories?.length > 0 ? (
                    categories.slice(0, 20)?.map((cat, index) => (
                      <li key={ index }>
                        <Link className='nav-line dropdown-item text-capitalize'
                          to={ `/category/${cat.slug}` }>
                          { cat.name }
                        </Link>
                      </li>
                    ))
                  ) : (
                    <>
                      <p>No Data Found</p>
                    </>
                  )
                }

              </ul>
            </li>
          </ul>

          {/* search-form */ }
          <form className=' flex flex-grow-1 mx-lg-4 my-2 mg-lg-0'>
            <input type="text" className=' w-full rounded-full px-2 py-2 border
             border-slate-500 text-slate-600'
              placeholder='search type' />
          </form>

          {/* end */ }

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Aboutus">Aboutus</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </li>

            <li className='nav-item'>
              <Link className="nav-link" to="/Labs">Labs</Link>
            </li>

            <li className='nav-item'>
              <Link className="nav-link" to="/Employeelist">Employee List</Link>
            </li>

            <li className='nav-item'>
              <Link className="nav-link" to="/Test">Test</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/Practise">Practise</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/Parent">Parentchild</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/Curency">Curency</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

