import Cookies from 'universal-cookie/es6'
import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
const cookies = new Cookies();

const Login = (props) => {
    let history = useHistory()
    const [account_no, setAccount] = useState("")
    const [password, setPassword] = useState("")
    let handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ account_no: account_no, password: password })
        })
        let json = await response.json();
        if (json.success) {
            cookies.set('auth-token', json.authtoken);
            history.push('/random')
        }

    }
    return (
        <div className="login">
            <div className="show-off">
                <span>Welcome to Mihir Bank!</span>
                <img src={props.svg} alt="bank svgs" />
            </div>
            <div className="login-form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="head-login">
                        <span>Login</span>
                    </div>
                    <div className="account_no vertical-center">
                        <span>Account Number</span>
                        <input type="text" placeholder="Example : MSB100275" value={account_no} onChange={(e)=>{
                            setAccount(e.target.value)
                        }}/>
                    </div>
                    <div className="password-login vertical-center">
                        <span>Password</span>
                        <input type="password" placeholder="Password" value={password} onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <div className="submit-button">
                        <button type="submit" className="btn-submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
