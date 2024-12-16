import React, { useEffect } from 'react'
import Button from '../../Components/Button/Button'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()
    const url = 'http://localhost:4000'

    const [inputValue, setInputValue] = useState({
        username: '',
        password: ''
    })

    const toAdmin = () => {
        if (token) navigate('/admin')
    }
    const [token, setToken] = useState(false)



    const fetchData = async () => {
        const data = await axios.post(`${url}/admin/login`, inputValue)
            .then((response) => {
                if (response.data.succes) {
                    localStorage.setItem("token", response.data.token);
                    toAdmin()
                } else {
                    return toast(response.data.message)
                }

            })
        setToken(localStorage.getItem("token"))
    }
    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    return (
        !token ?
            <>
                <div className='w-full font-[Bungee] h-[100vh] bg-gradient-to-b from-[#d0a269] via-[#ae3e86] to-purple-900'>

                    <div className='flex flex-col h-full gap-3 items-center justify-center'>
                        <p className='text-'><b>Note-</b> Only for Admin</p>
                        <div className='bg-[#eccaa5] text-[#c99a73] w-20 h-20 rounded-[100%] flex items-center justify-center'><i className="fa-regular fa-circle-user text-5xl"></i></div>
                        <div className='flex items-center'>
                            <label htmlFor="inu"><div className='w-10 h-10 bg-zinc-100 text-xl flex items-center justify-center'><i className="fa-solid fa-user"></i></div></label>
                            <input onChange={(e) => {
                                setInputValue((prev) => ({ ...prev, ['username']: e.target.value }))
                            }} id='inu' className='h-10 font-sans w-[20rem] bg-[#f1cba9] px-5 outline-none' type="text" name="username" />
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="inp"><div className='w-10 h-10 bg-zinc-100 text-xl flex items-center justify-center'><i className="fa-solid fa-user-lock"></i></div></label>
                            <input onChange={(e) => {
                                setInputValue((prev) => ({ ...prev, ['password']: e.target.value }))
                            }} id='inp' className='h-10 font-sans w-[20rem] bg-[#f1cba9] px-5 outline-none' type="password" name="password" />
                        </div>
                        
                        <div>
                            <Button fetchData={fetchData} value={'Login'} />
                        </div>
                    </div>
                </div>
            </> : toAdmin()
    )
}

export default Login
