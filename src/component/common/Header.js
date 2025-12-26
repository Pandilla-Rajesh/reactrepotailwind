import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
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
             border-slate-600 text-slate-600'
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
              <Link className="nav-link" to="/Services">Products</Link>
            </li>

            {/* <li className='nav-item'>
              <Link className="nav-link" to="/Labs">Labs</Link>
            </li> */}

            <li className='nav-item'>
              <Link className="nav-link" to="/Employeelist">Employee List</Link>
            </li>

            <li className='nav-item'>
              <Link className="nav-link" to="/Test">Test</Link>
            </li>
            {/* <li className='nav-item'>
              <Link className="nav-link" to="/Practise">Practise</Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className="nav-link" to="/Parent">Parentchild</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/Curency">Curency</Link>
            </li> */}
            <li className='nav-item'>
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            {/* <li className='dropdown'>
              <button className='btn btn-primary dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="false">
                <PersonOutlineIcon />
                <div className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item'>Dashboard</Link>
                  </li>
                </div>
              </button>
            </li> */}

            <li>

              <button id="dropdownHoverButton" data-dropdown-toggle="dropdownAvatar" data-dropdown-trigger="hover"
                class="inline-flex items-center justify-center text-white bg-blue-50 box-border border 
              border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs 
              font-medium leading-5 rounded-base text-sm p-1 focus:outline-none rounded-full" type="button">
                <span className='sr-only'>Open User Details</span>
                <img src={ require('../../assets/images/image1.jpg') } alt="user-avatar" loading='lazy'
                  className='w-8 h-8 rounded-full' />
              </button>

              <div id="dropdownAvatar" class="z-10 hidden bg-neutral-primary-medium border 
              border-slate-600 rounded-base shadow-lg w-80 rounded bg-white">
                <div className='p-2'>
                  <div className=' flex items-center justify-center px-2 p-2 space-x-1.5 rounded text-sm 
                   bg-slate-100'>
                    <img src={ require('../../assets/images/image1.jpg') } alt="user-avatar" loading='lazy'
                      className='w-8 h-8 rounded-full' />
                    <div className='text-sm'>
                      <div className=' text-blue-800 font-bold'>Rajesh Pandilla</div>
                      <div className='text-truncate text-body font-medium'>rajarjunpandilla@gmail.com</div>
                    </div>
                    <span className='bg-brand-softer border border-brand-subtle text-fg-brand-strong
                     text-xs font-medium px-3 py-1 rounded ms-auto text-slate-600'>Pro</span>
                  </div>
                </div>
                <ul class="p-2 text-sm text-slate-400 font-medium px-2" aria-labelledby="dropdownHoverButton">
                  <li>
                    <Link to="/" className=' inline-flex items-center gap-2 w-full p-2 
                    hover:bg-blue-800 hover:text-white text-decoration-none rounded text-gray-700'>
                      <DashboardIcon />
                      <span className='text-sm '>Dashboard</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className=' inline-flex items-center gap-2 w-full p-2 
                    hover:bg-blue-800 hover:text-white text-decoration-none rounded text-gray-700'>
                      <DashboardIcon />
                      <span className='text-sm '>Accounts</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className=' inline-flex items-center gap-2 w-full p-2 
                    hover:bg-blue-800 hover:text-white text-decoration-none rounded text-gray-700'>
                      <DashboardIcon />
                      <span className='text-sm '>Settings</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className=' inline-flex items-center gap-2 w-full p-2 
                    hover:bg-blue-800 hover:text-white text-decoration-none rounded text-gray-700'>
                      <DashboardIcon />
                      <span className='text-sm '>Privacy</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className=' inline-flex items-center gap-2 w-full p-2 
                    hover:bg-blue-800 hover:text-white text-decoration-none rounded text-gray-700'>
                      <DashboardIcon />
                      <span className='text-sm '>Help center</span>
                    </Link>
                  </li>

                  <li className=' border-t border-slate-300 pt-2'>
                    <Link to="/" className=' inline-flex items-center gap-2 w-full p-2 
                    hover:bg-red-600 hover:text-white text-decoration-none rounded text-red-600'>
                      <LogoutIcon />
                      <span className='text-sm '>Sign out</span>
                    </Link>
                  </li>

                </ul>
              </div>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

