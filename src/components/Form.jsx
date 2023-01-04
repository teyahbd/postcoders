import { useState } from "react";

import "./Form.css";

const Form = ({ setCurrentPostcode }) => {
  const [input, setInput] = useState("");
  const [isCorrectFormat, setIsCorrectFormat] = useState(false);

  function handleChange(event) {
    setInput(event.target.value);

    const regex = /^[a-zA-Z0-9]{2,4}$/;

    if (regex.test(event.target.value)) {
      setIsCorrectFormat(true);
    } else {
      setIsCorrectFormat(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isCorrectFormat) {
      setCurrentPostcode(input);
    }
  }

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <label for="outcode" id="form-label">
        Please enter the first half of a valid UK postcode:
      </label>
      <input
        id="outcode"
        type="text"
        placeholder="e.g. BB10"
        onChange={handleChange}
        className={!isCorrectFormat && input.length >= 1 ? "red" : null}
        value={input}
      />
      {!isCorrectFormat && input.length >= 1 ? (
        <p id="warning-msg">
          An outcode should contain 2-4 letters and/or numbers.
        </p>
      ) : (
        <></>
      )}
      <input type="submit" value="Submit" id="submit-button" />
    </form>
  );
};

export default Form;
