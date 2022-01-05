import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handelChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }
    const register = (e) => {
        e.preventDefault()
        const { name, email, password, reEnterPassword } = user

        if (name && email && password && (password === reEnterPassword)) {
            axios.post("/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
            // alert("posted");
        } else {
            alert("invalid input")
        }
    }

    return (
        <div className='login'>
            <h1>Signup page</h1>
            {console.log("User", user)}
            <form>
                <div className="form-group">
                    <input type="text" name="name" value={user.name} className="form-control" placeholder="Your Name" onChange={handelChange} />
                </div>
                <br />
                <div className="form-group">
                    <input type="email" name="email" value={user.email} className="form-control" placeholder="Enter email" onChange={handelChange} />
                </div>
                <br />
                <div className="form-group">
                    <input type="password" name="password" value={user.password} className="form-control" placeholder="Enter password" onChange={handelChange} />
                </div>
                <br />
                <div className="form-group">
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} className="form-control" placeholder="Enter re-enter Password" onChange={handelChange} />
                </div>
                <br />
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                    </div>
                </div>
                <button type="submit" onClick={register} className="btn btn-primary btn-lg btn-block m-3">Register</button>
               
                <button type="submit" onClick={() => history.push("/login")} className="btn btn-success btn-lg btn-block">Login</button>

            </form>
        </div>
    )
}

export default Signup;