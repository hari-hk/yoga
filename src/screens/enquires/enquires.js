import React, { Component } from "react";
import "./enquires.scss";

import listData from "../../assets/jsons/yoga-list.json";

export class Enquires extends Component {
  constructor() {
    super();
    this.state = {
      list: listData.data,
    };
  }
  render() {
    const enquires = (data) => {
      return (
        <div className="card">
          <section className="primary">
            <img alt="primary" src={data.image} />
          </section>
          <section className="detail">
            <p className="title">{data.title}</p>
            <p className="query">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </section>
        </div>
      );
    };

    return (
      <div className="enquires">
        <h1 className="title">Enquires</h1>
        <div className="list-enq">
          {this.state.list.map((el) => {
            return enquires(el);
          })}
        </div>
      </div>
    );
  }
}
