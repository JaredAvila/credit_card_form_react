import React from "react";
import * as classes from "./Form.module.css";

function Form() {
  return (
    <div className={classes.Container}>
      <form>
        <label htmlFor="number">Card Number</label>
        <input type="text" name="number" />
        <label htmlFor="name">Cardholder Name</label>
        <input type="text" name="name" />
        <div>
          <div>
            <label htmlFor="expiration">Expiration Date</label>
            <div>
              <select name="expiration">
                <option value="00" default>
                  Month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="year">
                <option value="00" default>
                  Year
                </option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
          </div>

          <label htmlFor="code">CVV</label>
          <input type="text" name="code" />
        </div>
      </form>
    </div>
  );
}

export default Form;
