import React from 'react'
import Login from '../../components/login/Login'
import '../loginpage/LoginPage.css'


const LoginPage = ({logUser,setlogUser}) => {
  return (
    <>
    <div className="Login-page">
    <Login logUser={logUser} setlogUser={setlogUser}></Login>
    </div>
    </>
  )
}

export default LoginPage