import React from 'react';
import './mini-calender.scss';

export class MiniCalender extends React.Component {

    calenderDate = [];
    constructor() {
        super();
        this.state = {
            selectedDate: new Date().getDate()
        }
    }

    componentWillMount() {
        this.dateForMiniCalender();
    }
    dateForMiniCalender() {
        for (let i = -3; i <= 3; i++) {
            const date = new Date(new Date().setDate(new Date().getDate() + i));
            this.calenderDate.push({
                date: date.getDate(),
                month: new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
            });
        }

    }

    get firstDate() {
        return this.calenderDate[0];
    }

    get lastDate() {
        return this.calenderDate[this.calenderDate.length - 1];
    }

    selectDate(ev) {
        this.setState({ selectedDate: ev.date });
    }


    render() {
        return (
            <div className="mini-calender">
                <p>{this.firstDate?.month} {this.firstDate?.date} - {this.firstDate?.month === this.lastDate?.month ? '' : this.lastDate?.month} {this.lastDate?.date}</p>
                <div className="dates">
                    {this.calenderDate.map((data, i) => {
                        return <button onClick={() => this.selectDate(data)} key={i} className={data.date === this.state.selectedDate ? 'selected' : ''}>{data.date}</button>;
                    })}
                </div>
            </div>
        );
    }
}

