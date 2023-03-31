import { useState } from "react";
import axios from 'axios';
import '../register/Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import sideimage from '../../assect/img1.jpg'
import Notification from "../smallComponents/notification/Notification";

const Register = () => {
  const [formData, setFormData] = useState({userName:'', userEmail:'', userContactNumber:'', buserPassword:'', userStage:'Farmer'});
  const [notify, setnotify] = useState({isOpen:false, message:'', type:''})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  
  const PushData = (event) =>{
    console.log(formData)
    event.preventDefault();
    axios
    .post('http://localhost:8082/api/v1/farmerRegister', formData)
    .then(function (response) {
      switch(response.data){
        case "Save of user data":
        setnotify({isOpen:true, message:response.data, type:'success'})
        break
        case "Same Email Address":
        setnotify({isOpen:true, message:response.data, type:'error'})
        break
        default:
        setnotify({isOpen:true, message:response.data, type:'success'})
      }})
    .catch(function (error) {setnotify({isOpen:true, message:error.data, type:'error'})});
    setFormData({userName:'', userEmail:'', userContactNumber:'', userPassword:'', userStage:'Farmer'})
  }

  return (
    <>
    <div className="Register-Box">
      <div className="Register-Side">
        <div className="Register-Topic">
          <h1>Sing In</h1></div>
        <div className="Register-Form">
        <Form onSubmit={PushData} className = "Form-for-user"> 
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="name" onChange={handleChange} name="userName" value={formData.userName} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleChange} name="userEmail" value={formData.userEmail} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicContactnumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" onChange={handleChange} name="userContactNumber" value={formData.userContactNumber} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} name="userPassword" value={formData.userPassword} required/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>User Stage</Form.Label>
            <Form.Select enable = "true" type="select" onChange={handleChange} name="userStage" value={formData.userStage} required>
              <option>Farmer</option>
              <option>Seller</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
          <br/>
          <a href="/">I have a account</a>
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

export default Register