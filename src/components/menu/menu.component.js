import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as CalenderIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as Logo } from "../../assets/icons/yoga.svg";
import profile from "../../assets/images/profile.jpg";
import "./menu.scss";

const List = ({ computedmatch, path }) => {
  return (
    <li>
      <NavLink activeClassName="is-active" to={path}>
        {/* <props.component className="menu-icon" />
        <ReactComponent
          component={component}
          className="menu-icon"
        ></ReactComponent> */}
        {computedmatch}
        {/* <IconComponent {...component} /> */}
      </NavLink>
    </li>
  );
};

export class MenuComponent extends React.Component {
  render() {
    return (
      <div className="menu">
        <Logo className="icon" />
        <ul>
          <List
            path="/home"
            computedmatch={<HomeIcon className="menu-icon" />}
          />
          {/* <List path="/enquires" component={ChatIcon} />
          <List path="/my-schedules" component={CalenderIcon} />
          <List path="/settings" component={SettingIcon} /> */}
        </ul>
        <img className="profile-image" src={profile} alt="profile" />
      </div>
    );
  }
}
