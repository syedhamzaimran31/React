import React from "react";

function contact() {
  return (
    <div>
      <MDBInput
        wrapperClass="mb-4"
        label="First Name"
        id="formControlLg"
        type="text"
        size="lg"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Last Name"
        id="formControlLg"
        type="text"
        size="lg"
      />
    </div>
  );
}

export default contact;
