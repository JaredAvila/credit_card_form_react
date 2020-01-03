import React from "react";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import * as classes from "./Landing.module.css";

function Landing() {
  return (
    <div className={classes.Landing}>
      <Card />
      <Form />
    </div>
  );
}

export default Landing;
