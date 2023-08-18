import React, { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";


export const User = () => {
    const [isLogin, setIsLogin] = useState({
        email: "",
        password: "",
        profile: false
    })
    const handleForm = (e) => {
        e.preventDefault()
        setIsLogin({
            ...isLogin,
            profile: true,
        })
    }
    const createNew = () => {
        setIsLogin({
            ...isLogin,
            profile: !isLogin.profile,
        })
    }
    return (
        <div className="paper">
            <Typography variant="h5" gutterBottom>
                {!isLogin.profile ? "Login" : "Singup"}
            </Typography>
            <form className="form"
                onSubmit={handleForm}
            >
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={isLogin.email}
                    onChange={(e) =>{
                        const value = e.target.value;
                        setIsLogin({
                            ...isLogin,
                            email: {value},
                        })
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={isLogin.email}
                    onChange={(e) =>{
                        const value = e.target.value;
                        setIsLogin({
                            ...isLogin,
                            password: {value},
                        })
                    }}
                />
                <Button type="submit" variant="contained" color="primary">
                    <Link to={`/`}>{!isLogin.profile ? "Login" : "Singup"}</Link>
                </Button>
                <Link className='createNew' onClick={createNew}>{isLogin.profile ? "Alreay Have" : "create New"}</Link>
            </form>
        </div>
    )
}
