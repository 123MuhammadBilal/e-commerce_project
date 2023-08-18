import React, { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios'



export const Form = () => {
    const [isLogin, setIsLogin] = useState({
        name: "",
        email: "",
        password: "",
        isProfileLogin: false,
    })
    const onSubmitForm = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:5000/register', {
    isLogin})

        setIsLogin({
            ...isLogin,
            isProfileLogin: true,
        })
    }
    const createNew = () => {
        setIsLogin({
            ...isLogin,
            isProfileLogin: !isLogin.isProfileLogin,
        })
    }
    return (
        <div className="paper">
            <Typography variant="h5" gutterBottom>
                {!isLogin.isProfileLogin ? "Login" : "Singup"}
            </Typography>
            <form className="form"
                onSubmit={onSubmitForm}
            >
                <TextField
                    label="Name"
                    type="name"
                    variant="outlined"
                    value={isLogin.name}
                    onChange={(e) => {
                        setIsLogin({
                            ...isLogin,
                            name: e.target.value,
                        })
                    }}
                />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={isLogin.email}
                    onChange={(e) => {
                        setIsLogin({
                            ...isLogin,
                            email: e.target.value,
                        })
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={isLogin.password}
                    onChange={(e) => {
                        setIsLogin({
                            ...isLogin,
                            password: e.target.value,
                        })
                    }}
                />
                <Button type="submit" variant="contained" color="primary">
                    {/* <Link to={`/`}>{!isLogin.isProfileLogin ? "Login" : "Singup"}</Link> */}
                    Singup
                </Button>
                <Link className='createNew' onClick={createNew}>{isLogin.isProfileLogin ? "Alreay Have" : "create New"}</Link>
            </form>
        </div>
    )
}
