import React, { Component } from 'react';
import './home.scss';

import { ReactComponent as Clock } from '../../assets/icons/clock.svg';

import { Toolbar } from '../../components/toolbar/toolbar';
import listData from '../../assets/jsons/yoga-list.json';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            list: listData.data
        }
    }
    render() {
        const yogaList = () => {
            return (
                this.state.list.map((element, idx) => {
                    return <div className="card" key={idx}>
                        <img className="card-img" src={element.image} />
                        <div className="card-content">
                            <p>{element.title}</p>
                            <div className="timing">
                                <Clock className="clock" /> <div className="time"> {element.fromTime}- {element.toTime}</div>
                            </div>
                        </div>

                        <div className="tutor-info">
                            <img className="tutor-profile" src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} />
                            <p className="user-name">{element.name}</p>
                        </div>
                    </div>
                })
            )
        }

        return (
            <div className="content">
                <header>
                    <h1>Your Yoga Partner</h1>
                </header>
                <Toolbar />
                <section className="list">
                    {
                        yogaList()
                    }
                </section>
            </div>
        );
    }
}

