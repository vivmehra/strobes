import React, { useState } from "react";
import { FluidForm, TextInput, Button } from "carbon-components-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const [showData, setshowData] = useState("");

  const inputChangeHandler = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFormData({ ...formData, fname: event.target.value });
        let fromErrorDataFname = { ...formError };
        delete fromErrorDataFname.fnameErr;
        setFormError({ ...fromErrorDataFname });
        break;
      case "email":
        setFormData({ ...formData, email: event.target.value });
        let fromErrorDataEmail = { ...formError };
        delete fromErrorDataEmail.emailErr;
        setFormError({ ...fromErrorDataEmail });
        break;
      case "lastName":
        setFormData({ ...formData, lastName: event.target.value });
        break;
      case "company":
        setFormData({ ...formData, company: event.target.value });
        break;
      case "password":
        setFormData({ ...formData, password: event.target.value });
        let fromErrorDataPass = { ...formError };
        delete fromErrorDataPass.passErr;
        setFormError({ ...fromErrorDataPass });
        break;
      case "location":
        setFormData({ ...formData, location: event.target.value });
        break;
      default:
        console.log("inputting values from register form");
    }
  };
  const validateInput = (event) => {
    let formErrData = { ...formError };
    if (Object.keys(formData).length === 0 || formData.fname === "") {
      formErrData = {
        ...formErrData,
        fnameErr: "A valid value is required",
      };
    }
    if (Object.keys(formData).length === 0 || formData.email === "") {
      formErrData = {
        ...formErrData,
        emailErr: "A valid value is required",
      };
    }
    if (Object.keys(formData).length === 0 || formData.password === "") {
      console.log("in pass valid");
      formErrData = {
        ...formErrData,
        passErr: "A valid value is required",
      };
    }
    setFormError(formErrData);
    setshowData(JSON.stringify(formData));
  };

  return (
    <div>
      <div className="bx--row">
        <div className="bx--col-md-8 bx--col-lg-8">
          <FluidForm className="fluidForm">
            <TextInput
              id="fname"
              name="firstName"
              invalid={formError.fnameErr}
              invalidText={formError.fnameErr}
              labelText="First Name"
              onChange={inputChangeHandler}
              placeholder="First Name"
              size={"sm"}
              type="text"
            />
          </FluidForm>

          <FluidForm className="fluidForm">
            <TextInput
              id="company"
              name="company"
              invalid={false}
              invalidText="A valid value is required"
              labelText="Company"
              onChange={(event) => {
                setFormData({ ...formData, company: event.target.value });
              }}
              placeholder="Company"
              size={"sm"}
              type="text"
            />
          </FluidForm>
          <FluidForm className="fluidForm">
            <TextInput
              id="email"
              name="email"
              invalid={formError.emailErr}
              invalidText={formError.emailErr}
              labelText="Email"
              onChange={inputChangeHandler}
              placeholder="email"
              size={"sm"}
              type="text"
            />
          </FluidForm>
        </div>
        <div className="bx--col-md-8 bx--col-lg-8">
          <FluidForm className="fluidForm">
            <TextInput
              id="lname"
              name="lastName"
              invalid={false}
              invalidText="A valid value is required"
              labelText="Last Name"
              onChange={inputChangeHandler}
              placeholder="Placeholder text"
              size={"sm"}
              type="text"
            />
          </FluidForm>
          <FluidForm className="fluidForm">
            <TextInput
              id="location"
              invalid={false}
              invalidText="A valid value is required"
              labelText="Location"
              onChange={inputChangeHandler}
              placeholder="Location"
              size={"sm"}
              type="text"
              name="location"
            />
          </FluidForm>
          <FluidForm className="fluidForm">
            <TextInput.PasswordInput
              hidePasswordLabel="Hide password"
              id="password"
              name="password"
              invalidText={formError.passErr}
              labelText="Password"
              onChange={inputChangeHandler}
              placeholder="Password"
              showPasswordLabel="Show password"
              size={undefined}
              tooltipAlignment="center"
              tooltipPosition="bottom"
              invalid={formError.passErr}
            />
          </FluidForm>
        </div>
      </div>
      <Link className="login_link" to="#" onClick={validateInput}>
        <p className="continue">
          <Button>Continue to your free account</Button>
        </p>
      </Link>
      {showData.length > 2 && (
        <div>
          <h4>Form Data On Continue button click </h4>
          <p>{showData}</p>
        </div>
      )}
    </div>
  );
};
export default React.memo(Register);
