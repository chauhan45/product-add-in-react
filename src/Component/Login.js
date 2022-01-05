import React, { useState } from 'react'
import axios from 'axios';
import { Dashboard } from './Dashboard';
import { useHistory } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handelChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault()
        axios.post("/login", user)
            // .then(res=> console.log(res))
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")

            });
        // alert();

    }

    return (
        <div className='login'>
            <h1>Login page</h1>
            {console.log("user", user)}
            <form>
                <div className="form-group">
                    <input type="email" name="email" value={user.email} className="form-control" placeholder="Enter email" onChange={handelChange} />
                </div>
                <br />
                <div className="form-group">
                    <input type="password" name="password" value={user.password} className="form-control" placeholder="Enter password" onChange={handelChange} />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                    </div>
                </div>
                <button type="submit" onClick={login} className="btn btn-primary btn-lg btn-block m-3">login</button>
                <button type="submit" onClick={() => history.push("/signup")} className="btn btn-success btn-lg btn-block">Signup</button>
                <p>Login If Already Signup</p>
            </form>
        </div>
    )
}

export default Login;