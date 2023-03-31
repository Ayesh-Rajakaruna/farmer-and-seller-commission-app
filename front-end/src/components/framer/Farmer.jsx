import SideBar from '../sideBar/SideBar'
import UserProfile from '../userProfile/UserProfile'
import Message from '../Message/Message'
import SellItem from '../SellItem/SellItem'
import GoToShope from '../GoToShope/GoToShope'
import Analytics from '../Analytics/Analytics'
import '../framer/Farmer.css'
import { useState} from 'react'

export default function Farmer({logUser,setlogUser}) {
  const [rightcomponent, setrightcomponent ] = useState('');
  console.log(rightcomponent)

  return (
    <div className="Farmer">
    <SideBar logUser={logUser} setlogUser={setlogUser} setrightcomponent={setrightcomponent}/>
    {rightcomponent === "UserProfile" && <UserProfile logUser={logUser} setlogUser={setlogUser} />}
    {rightcomponent === "Message" && <Message />}
    {rightcomponent === "SellItem" && <SellItem />}
    {rightcomponent === "GoToShope" && <GoToShope />}
    {rightcomponent === "Analytics" && <Analytics />}
    </div>
  )
}
