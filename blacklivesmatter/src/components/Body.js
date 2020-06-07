import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

import SNS from "components/SNS.js";
import SNS_t from "components/SNS_CardTest.js";

function Body() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <SNS />
      </div>
    </>
  );
}

export default Body;