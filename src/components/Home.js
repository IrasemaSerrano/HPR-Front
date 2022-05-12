import React from 'react'
import { ReactSession } from 'react-client-session';

function Home(props) {

    const user = ReactSession.get("user")

    const logOut = () =>{
        window.localStorage.clear()
        props.setToken("")
    }

  return (
    <>
        <div>
            Welcome {user.firstName}
        </div>
        <div>
            <button onClick={logOut}>Log out</button>
        </div>
    </>
  )
}

export default Home