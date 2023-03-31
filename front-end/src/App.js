import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/registerpage/RegisterPage'
import LoginPage from './pages/loginpage/LoginPage'
import FarmerPage from './pages/farmerpage/FarmerPage';


function App() {
  const [logUser, setlogUser] = useState({message:'', userName:'',successStage:false, email:'', type:'', userStage:''})
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage logUser={logUser} setlogUser={setlogUser}/>}/>
        <Route path="Register" element={<RegisterPage/>}/>
        <Route path="/Farmer/*" element={<FarmerPage logUser={logUser} setlogUser={setlogUser}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
