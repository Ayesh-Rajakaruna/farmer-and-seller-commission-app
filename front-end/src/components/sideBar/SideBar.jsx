import {CDBSidebar,CDBSidebarContent,CDBSidebarMenu} from 'cdbreact';
import { NavLink } from 'react-router-dom';

import userimage from '../../assect/user.webp'
import './SideBar.css'

import { CgProfile } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { AiOutlineLogout, AiFillShop } from "react-icons/ai";

const SideBar = ({logUser,setlogUser,setrightcomponent}) => {
    const removelogUser = () =>{
      setlogUser({message:'', userName:'',successStage:false, email:'', type:'', userStage:''})
    }
    const changeRightComponent = (Component) =>{
      setrightcomponent(Component)
    }
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
        <CDBSidebar textColor="#fff" backgroundColor="#333" style={{width:'auto', height:'100%'}}>
        <div className="SideBar-Hedder">
        <div className="User-ditals"  >
            <img src={userimage} className="Side-Image" alt="sideimage" />
            <p>{logUser.userName}</p>
        </div>
        </div>
        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact="true" onClick={() => changeRightComponent("UserProfile")} activeclassname="activeClicked">
              <div className='Sidbar-item'><CgProfile style={{width:'20px', height:'20px', margin:'15px'}}/>User Profile</div>
            </NavLink>
            <NavLink exact="true" onClick={() => changeRightComponent("Message")}  activeclassname="activeClicked">
                <div className='Sidbar-item'><BsMessenger style={{width:'20px', height:'20px', margin:'15px'}}/>Message</div>
            </NavLink>
            <NavLink exact="true" onClick={() => changeRightComponent("SellItem")} onc activeclassname="activeClicked">
                <div className='Sidbar-item'><MdPlaylistAdd style={{width:'20px', height:'20px', margin:'15px'}}/>Sell Item</div>
            </NavLink>
            <NavLink exact="true" onClick={() => changeRightComponent("GoToShope")} activeclassname="activeClicked">
                <div className='Sidbar-item'><AiFillShop style={{width:'20px', height:'20px', margin:'15px'}}/>Go to Shope</div>
            </NavLink>
            <NavLink exact="true" onClick={() => changeRightComponent("Analytics")} activeclassname="activeClicked">
                <div className='Sidbar-item'><IoAnalytics style={{width:'20px', height:'20px', margin:'15px'}}/>Analytics</div>
            </NavLink>
            <NavLink exact="true" to="/" activeclassname="activeClicked" onClick={removelogUser}>
                <div className='Sidbar-item'><AiOutlineLogout style={{width:'20px', height:'20px', margin:'15px'}}/>Log Out</div>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
      );
}

export default SideBar