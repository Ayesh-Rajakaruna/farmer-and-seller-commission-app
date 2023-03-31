import { useState, useEffect } from "react";
import axios from 'axios';
import '../login/Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import sideimage from '../../assect/img1.jpg'
import Notification from "../smallComponents/notification/Notification";  
import { useNavigate } from "react-router-dom";

const Login = ({logUser,setlogUser}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({userEmail:'', userPassword:'', userStage:'Farmer' })
  const [notify, setnotify] = useState({isOpen:false, message:'', type:''})
  
  useEffect(() => {  // Change URL log to farmer
    if (logUser && logUser.successStage) {navigate(`${logUser.userStage}/${logUser.userName}`);}
  }, [logUser, navigate]);


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const PushData = (event) =>{
    event.preventDefault();
    axios
    .post('http://localhost:8082/api/v1/farmerLogin', formData)
    .then(function (response) {
      setnotify({isOpen:true, message:response.data.message, type:response.data.type});
      setlogUser(response.data)
    })
    .catch(function (error) {console.log(error)});
    setFormData({userEmail:'', userPassword:'', userStage:'Farmer' })
  }

  return (
    <>
    <div className="Login-Box">
      <div className="Login-Side">
        <div className="Login-Topic">
          <h1>Loging</h1></div>
        <div className="Login-Form">
        <Form onSubmit={PushData} className = "Form-for-user"> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleChange} name="userEmail" value={formData.userEmail} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="userPassword" value={formData.userPassword} required/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>User Stage</Form.Label>
            <Form.Select enable="true" type="select" onChange={handleChange} name="userStage" value={formData.userStage} required>
              <option>Farmer</option>
              <option>Seller</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
          <br />
          <a href="/Register">I have't account</a>
        </Form>
        
        </div>
      </div>
        <div className="Image-Side">
        <Notification notify={notify} setnotify={setnotify}/>
        <img src={sideimage} className="Side-Image" alt="sideimage" />
        </div>
    </div>
    </>
  )
}

export default Login