import React, { Component } from "react";
import data from "./Data";
import Modal from "./Modal";

class App extends Component {
  state = [
    {
      show: false,
    },
    {
      employeeDetails: {},
    },
  ];
  showModal = (eData) => {
    console.log(eData);
    this.setState([
      {
        show: true,
      },
      {
        employeeDetails: eData,
      },
    ]);
  };
  closeModal = () => {
    this.setState([
      {
        show: false,
      },
    ]);
  };

  listData = data.employees.map((eDetails) => {
    return (
      <div
        key={eDetails.userId}
        className="custom-div"
        onMouseOver={() => this.showModal(eDetails)}
      >
        <p>{eDetails.preferredFullName}</p>
        <p>{eDetails.jobTitleName}</p>
      </div>
    );
  });
  render() {
    return (
      <>
        {this.listData}
        <Modal data={this.state} close={this.closeModal} />
      </>
    );
  }
}

export default App;
