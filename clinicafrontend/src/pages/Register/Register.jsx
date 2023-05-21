import React from "react";
import { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";
import "./Register.css";

export const Register = () => {


    const [userData, setUserData] = useState({
        name:"",
        lastname:"",
        phone:"",
        email: "",
        password: "",
      });


    const inputHandler = (field) => {
        setCredentials((prevState) => ({
          ...prevState,
          [field.target.name]: field.target.value,
        }));
        console.log(credentials);
      };


  return (
    <div className="registerDesign">
        <div className="registerFormContainer">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 class="text-white mb-4">Apply for a job</h1>

            <MDBCard>
              <MDBCardBody className="px-4">
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Name</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput placeholder="Name" size="md" id="form1" type="text" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Last name</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput placeholder="Last name" size="md" id="form1" type="text" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Phone Number</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput placeholder="123 456 789" size="md" id="form1" type="text" />
                  </MDBCol>
                </MDBRow>


                <hr className="mx-n3" />

                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Email address</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <MDBInput
                      placeholder="example@example.com"
                      size="md"
                      id="form2"
                      type="email"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="align-items-center pt-4 pb-3">
                  <MDBCol md="3" className="ps-5">
                    <h6 className="mb-0">Password</h6>
                  </MDBCol>

                  <MDBCol md="9" className="pe-5">
                    <InputText
                    type={"password"}
                    className={"basicInput"}
                    placeholder={"********"}
                    name={"password"}
                    handler={inputHandler}
                    />
                  </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />



                <MDBBtn className="my-4" size="lg">
                  send application
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    </div>
  );
};
