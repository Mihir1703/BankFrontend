import React from 'react'
import { useHistory } from 'react-router'

const PageNotFound = (props) => {
    let history = useHistory()
    let GoHome = ()=>{
        history.push('/')
    }
    return (
        <div className="not-found">
            <img src={props.svg} alt="svg for 404 error" />
            <div className="info">
                <span>This is not the webpage you are looking for.</span>
                <div className="go-home">
                    <button className="btn-primary" onClick={GoHome}>Go Back Home</button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound