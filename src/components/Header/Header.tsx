import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {IHeaderProps} from "./Header.interface";
import './Header.css';



const Header: React.FC<IHeaderProps> = ({changeLogin}) => {
    const navigate = useNavigate();
    const handleLogoutClick = ():void => {
        changeLogin(false);
    }
    return (
        <div className='c-header-container'>
            <h1 onClick={() => navigate('/')} className="c-header-logo">Logo</h1>
            <div className="c-header-logout-container">
                <div onClick={handleLogoutClick} className="c-header-logout">Logout</div>
            </div>
        </div>
    )
};

export default Header;