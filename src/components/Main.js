import React from 'react'
import myJson from "../data/mark2.json";
import Login from './Login'
import Submit from './Submit'

export default function Main() {
    const chooser = myJson.ActionDisplayName === "Login"? <Login data={myJson} />: <Submit data={myJson} />
    return (
        <div>
            {chooser}
        </div>
    )
}
