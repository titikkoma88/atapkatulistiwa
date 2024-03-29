import React, { Component } from "react";

import { InputDate } from "elements/Form";
// import InputNumber from "elements/Form/InputNumber";
// import Breadcrumb from 'elements/Breadcrumb';

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  // state = {
  //   value: "1",
  // };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    // const breadcrumb = [
    //   { pageTitle: "Home", pageHref: "" },
    //   { pageTitle: "Mountain Details", pageHref: "" },
    // ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
            {/* <Breadcrumb data={breadcrumb} /> */}
            {/* <InputNumber
              max={30}
              onChange={this.handleChange}
              suffix=" night"
              isSuffixPlural
              name="value"
              value={this.state.value}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
