import React, { Component } from 'react';
import './settings.scss';

export class Settings extends Component {
    render() {
        return (
            <div className="setting">
                <h1 className="title">Settings</h1>
                <section className="profile-details">
                    <div className="form-fields">
                        <label for="firstName">First Name</label>
                        <input autocomplete="off" type="text" id="firstName" />
                    </div>
                    <div className="form-fields">
                        <label for="lastName">Last Name</label>
                        <input autocomplete="off" type="text" id="lastName" />
                    </div>
                    <div className="form-fields">
                        <label for="email">Email</label>
                        <input autocomplete="off" type="email" id="email" />
                    </div>
                    <div className="form-fields">
                        <label for="phone">Phone</label>
                        <input autocomplete="off" type="tel" id="phone" />
                    </div>


                    <div className="form-fields">
                        <label for="gender">Gender</label>
                        <select name="gender" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-fields">
                        <label for="dob">DOB</label>
                        <input autocomplete="off" type="date" id="dob" />
                    </div>
                </section>
            </div>
        );
    }
}

