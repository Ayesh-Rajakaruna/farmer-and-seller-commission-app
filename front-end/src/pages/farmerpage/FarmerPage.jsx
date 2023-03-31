import Farmer from "../../components/framer/Farmer"
import '../farmerpage/FarmerPage.css'
const FarmerPage = ({logUser,setlogUser}) => {
  return (
    <div className="Farmer-Page">
    <Farmer logUser={logUser} setlogUser={setlogUser}/>
    </div>
  )
}

export default FarmerPage