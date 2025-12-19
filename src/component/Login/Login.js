import React, { useCallback, useMemo, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const toggleVisible = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setLogin(prev => ({
            ...prev, [name]: value
        }))
        // setLogin({ ...login, [name]: value })
        console.log(login, 'user details fetched')
    })

    const handleSubmit = (event) => {

        setLoading(true)
        event.preventDefault()
        alert(JSON.stringify(login, null, 2))
        const errors = {}

        if(!login.username.trim()) {
            errors.username = "Please enter username"
        } else if(login.username.length < 10) {
            errors.username = "please enter max 10 characters"
        }

        if(!login.password.trim()) {
            errors.password = "please enter password"
        } else if(login.password.length < 10) {
            errors.password = "please enter password max 10 characters"
        }

        if(Object.keys(errors).length === 0) {
            navigate('/home')
        } else {
            setError(errors)
        }
        setLogin({ username: "", password: "" })
    }

    return (
        <section className=' bg-gradient-to-tr bg-blue-50 h-full'>
            <article className='container ms-auto'>
                <div className='grid grid-cols-1 h-dvh'>
                    <div className=' flex items-center justify-center'>
                        <div className='bg-white rounded-lg p-3 w-full sm:w-full md:w-1/2 lg:w-1/3 py-3'>
                            <div className=' flex items-center justify-center flex-col gap-2'>
                                <h1 className='text-3xl text-slate-800 font-bold'>Login</h1>
                                <p className='text-slate-800'>Welcome to the Login for the user details</p>
                                <Form className='text-left flex flex-col gap-0 w-full' onSubmit={ handleSubmit }>
                                    <div className='mb-2'>
                                        <label className='block'>
                                            <span className='after:content-[*] after:ml-0-5 after:text-red-500 
                                        block text-sm font-normal mb-2 text-gray-400'>
                                                UserName
                                            </span>
                                            <div className=' group d-block w-full my-2'>
                                                <div className='flex relative w-full flex-col'>
                                                    <input type="text" name='username' placeholder='Enter UserName'
                                                        className={ `w-full border border-slate-50 bg-transparent placeholder-slate-400
                                                        rounded px-2 py-2 ${error.username ? 'border-red-500 ring-red-500' : 'border-gray-400'}` }
                                                        onChange={ handleChange } value={ login.username } />
                                                    <span className=' absolute right-3 top-1/2 text-gray-600 text-xl cursor-pointer -translate-y-1/2'>
                                                        <i className="bi bi-person"></i>
                                                    </span>
                                                    <p>{ error.username &&
                                                        <small className='text-red-500 text-sm'>{ error.username }</small> }</p>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block'>
                                            <span className='after:content-[*] after:ml-0-5 after:text-red-500 
                                        block text-sm font-normal text-gray-400 mb-2'>
                                                Password
                                            </span>
                                            <div className='group block w-full'>
                                                <div className='flex relative flex-col'>
                                                    <input type={ showPassword ? 'text' : 'password' } placeholder='Enter UserName'
                                                        className={ `w-full border border-slate-50 bg-transparent placeholder-slate-400
                                            rounded px-2 py-2 ${error.password ? 'border-red-500' : 'border-red-800'}` } />
                                                    <p>{ error.password &&
                                                        <small className="text-red-500 text-sm">{ error.password }</small> }</p>
                                                    <span className=' absolute right-3 top-1/2 text-xl cursor-pointer
                                                     text-gray-600 -translate-y-1/3' onClick={ toggleVisible }>
                                                        { showPassword ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i> }
                                                    </span>

                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className='w-100'>
                                        <button type='submit' value="submit" className=' bg-indigo-600 p-2 w-full
                                         text-slate-50 rounded'>
                                            Sign in
                                        </button>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Login