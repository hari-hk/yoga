import React, { Component } from "react";
import Input from "../../components/Input/Input";
import "./settings.scss";

export class Settings extends Component {
  render() {
    return (
      <div className="setting">
        <h1 className="title">Settings</h1>
        <section className="profile-details">
          <Input label="First Name" id="firstName" />
          <Input label="Last Name" id="lastName" />
          <Input label="Email" type="email" id="email" />
          <Input label="Phone" type="tel" id="phone" />

          <div className="form-fields">
            <label for="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Input label="DOB" type="date" id="dob" />
        </section>
      </div>
    );
  }
}
