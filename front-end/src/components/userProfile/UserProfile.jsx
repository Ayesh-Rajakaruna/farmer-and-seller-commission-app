import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';

const UserProfile = ({logUser,setlogUser}) => {
  
  const [userprofile,setuserprofile] = useState({userName: '', userEmail: '', userStage: '', userContactNumber: ''})
  useEffect(() => {
    console.log(`http://localhost:8082/api/v1/userProfile/${logUser.email}`)
    axios
    .get(`http://localhost:8082/api/v1/userProfile/${logUser.email}`)
    .then(function (response) {setuserprofile(response.data)})
    .catch(function (error) {console.log(error)});
  }, []);

    
  console.log(logUser)
  return (
    <>
    <div>{userprofile.userName}</div>
    <div>{userprofile.userEmail}</div>
    <div>{userprofile.userStage}</div>
    <div>{userprofile.userContactNumber}</div>
    </>
  )
}

export default UserProfile;