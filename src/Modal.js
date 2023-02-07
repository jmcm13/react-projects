import React from "react";
import Button from "react-bootstrap/Button";
import BsModal from "react-bootstrap/Modal";

function Modal(props) {
  console.log(props)
  return (
    <>
      <BsModal show={props.data[0].show}>
        <BsModal.Header>Employee Detail:</BsModal.Header>
        <BsModal.Body>
          <p>User Id: {props.data[1].employeeDetails.userId}</p>
          <p>Job: {props.data[1].employeeDetails.jobTitleName}</p>
          <p>First Name: {props.data[1].employeeDetails.firstName}</p>
          <p>Last Name: {props.data[1].employeeDetails.lastName}</p>
          <p>Employee Code: {props.data[1].employeeDetails.employeeCode}</p>
          <p>Region: {props.data[1].employeeDetails.region}</p>
          <p>Phone Number: {props.data[1].employeeDetails.phoneNumber}</p>
          <p>Email Address: {props.data[1].employeeDetails.emailAddress}</p>
        </BsModal.Body>
        <BsModal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </BsModal.Footer>
      </BsModal>
    </>
  );
}

export default Modal;
