import React from 'react';
import './menu.scss';

import profile from '../../assets/images/profile.jpg';
import { ReactComponent as Logo } from '../../assets/icons/yoga.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg';
import { ReactComponent as CalenderIcon } from '../../assets/icons/calendar.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/setting.svg';
import { NavLink } from "react-router-dom";

export class MenuComponent extends React.Component {
    render() {
        return (
            <div className="menu">
                <Logo className="icon" />
                <ul>

                    <li>
                        <NavLink activeClassName='is-active' to="/home"> <HomeIcon className='menu-icon' /></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/enquires"> <ChatIcon className='menu-icon' /></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/my-schedules"> <CalenderIcon className='menu-icon' /></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/settings"> <SettingIcon className='menu-icon' /></NavLink>
                    </li>
                </ul>
                <img className="profile-image"
                    src={profile}
                    alt="profile" />
            </div>
        );
    }
}