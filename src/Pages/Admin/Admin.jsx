import React, { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import AddItem from '../AddProject/AddItem'
import ProjectList from '../Project List/ProjectList'
import DeleteProjt from '../DeleteProject/DeleteProjt'
import EditProject from '../EditProject/EditProject'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Admin = () => {

    const url = 'http://localhost:4000'

    const navigate = useNavigate()
    const loginPage = () => {
        navigate('/login')
    }

    // HANDLE HOVER/CLICK BG
    const [hover, setHover] = useState('List Project')
    const [token, setToken] = useState(false)
    useEffect(() => { setToken(localStorage.getItem("token")) }, [])

    return (
        token ?
            <>
                <div className=''>
                    <Navbar />
                    <div className='flex'>
                        <Sidebar hover={hover} setHover={setHover} />
                        <AddItem hover={hover} />
                        <ProjectList hover={hover} />
                        <DeleteProjt hover={hover} />
                        <EditProject hover={hover} />
                    </div>
                </div>
            </> : loginPage()
    )
}

export default Admin
