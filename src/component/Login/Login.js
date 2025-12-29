import TextField from '@mui/material/TextField'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React, { useCallback, useMemo, useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

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
        setLogin(prev => ({ ...prev, [name]: value }))
        // setLogin({ ...login, [name]: value })
        console.log(login, 'user details fetched')
    }, [])

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
        } else if(login.password.length < 5) {
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
                        <div className='bg-white rounded-lg p-3 w-full sm:w-full md:w-1/2 lg:w-1/3 py-3 shadow-lg'>
                            <div className=' flex items-center justify-center flex-col gap-2'>
                                <Typography variant='h2'>
                                    <PersonOutlineIcon fontSize='inherit' className=' text-slate-600' />
                                </Typography>

                                <Typography variant='h4' className='mb-0 text-blue-600' fontWeight="bold">
                                    Login
                                </Typography>

                                <Typography variant='body2' className=' text-gray-500 mb-3'>
                                    Welcome to the Login for the user details
                                </Typography>

                                <Form className='text-left flex flex-col gap-0 w-full' onSubmit={ handleSubmit }>
                                    <div className='mb-2'>
                                        <label className='block'>

                                            <TextField fullWidth
                                                name='username' label="UserName"
                                                placeholder='Type username...'
                                                value={ login.username }
                                                autoComplete='off'
                                                id='username' onChange={ handleChange }
                                                error={ !!error.username }
                                                helperText={ error.username }
                                                sx={ {
                                                    '& .MuiOutlinedInput-root': {
                                                        '& .Mui-focused fieldset': {
                                                            borderColor: ' red'
                                                        }
                                                    }
                                                } }
                                                className={ `mb-3` }
                                            />

                                            <TextField fullWidth label="password"
                                                name='password' id='password'
                                                type={ showPassword ? 'text' : 'password' }
                                                value={ login.password }
                                                onChange={ handleChange }
                                                error={ !!error.password }
                                                helperText={ error.password }
                                                className={ `rounded-full` }
                                            />

                                            {/* <div className='input-group'>
                                                <TextField placeholder='username' id='username' name='username' label="username"
                                                    onChange={ handleChange } value={ login.username }
                                                    className={ `w-full border border-slate-50 bg-transparent placeholder-slate-400
                                                         focus:bg-red-500 focus:outline-none focus:border-red-500
                                                        rounded px-2 py-2 ${error.username ? 'border-red-500 ring-red-500' : 'border-gray-400'}` } />
                                                <span className="input-group-text">
                                                    <PersonOutlineIcon />
                                                </span>
                                                <p>{ error.username && <small className=' text-red-500 text-sm'>
                                                    { error.username }</small> }</p>
                                            </div> */}

                                            <div className=' group d-block w-full my-2'>
                                                <div className='flex relative w-full flex-col'>

                                                    {/* <TextField id='username' label="UserName" placeholder='userName' multiline
                                                        value={ login.username } name='username' onChange={ handleChange }
                                                        className={ `rounded-lg` } />
                                                    <span className=' absolute right-3 top-1/4 cursor-pointer'>
                                                        <PersonOutlineIcon fontSize='medium' />
                                                    </span>
                                                    <p>{ error.username && <small className='text-red-500 text-sm'>
                                                        { error.username }</small> }</p> */}

                                                    {/* <input type="text" name='username' placeholder='Enter UserName' required
                                                        className={ `w-full border border-slate-50 bg-transparent placeholder-slate-400
                                                         focus:bg-red-500 focus:outline-none focus:border-red-500
                                                        rounded px-2 py-2 ${error.username ? 'border-red-500 ring-red-500' : 'border-gray-400'}` }
                                                        onChange={ handleChange } value={ login.username } />
                                                    <span className=' input-group-text  text-gray-600 text-xl cursor-pointer -translate-y-1/2'>
                                                        <i className="bi bi-person"></i>
                                                    </span>
                                                    <p>{ error.username &&
                                                        <small className='text-red-500 text-sm'>{ error.username }</small> }</p> */}
                                                </div>
                                            </div>
                                        </label>

                                    </div>
                                    {/* 
                                    <div className='mb-4'>
                                        <label className='block'>
                                            <span className='after:content-[*] after:ml-0-5 after:text-red-500 
                                        block text-sm font-normal text-gray-400 mb-2'>
                                                Password
                                            </span>
                                            <div className='group block w-full'>
                                                <div className='flex relative flex-col'>
                                                    <input type={ showPassword ? 'text' : 'password' } placeholder='Enter UserName'
                                                        name='password' value={ login.password } onChange={ handleChange } maxLength={ 10 } minLength={ 8 } required
                                                        className={ `w-full border border-slate-50 bg-transparent placeholder-slate-400
                                                             focus:bg-red-500 focus:outline-none focus:border-red-500
                                            rounded px-2 py-2 ${error.password ? 'border-red-500' : 'border-red-800'}` } />
                                                    <p>{ error.password &&
                                                        <small className="text-red-500 text-sm">{ error.password }</small> }</p>
                                                    <span className=' absolute right-3 top-1/4 text-xl cursor-pointer
                                                     text-gray-600 -translate-y-1/3' onClick={ toggleVisible }>
                                                        { showPassword ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i> }
                                                    </span>

                                                </div>
                                            </div>
                                        </label>
                                    </div> */}

                                    <div className='w-100'>
                                        <Typography variant='button'>
                                            <button type='submit' value="submit" className=' bg-blue-600 p-2.5 
                                            w-full font-medium text-slate-50 rounded-full text-xl'>
                                                Sign in
                                            </button>
                                        </Typography>

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