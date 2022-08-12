import { useState, useEffect } from "react";

export default function AddMessage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({});
  return(
    
    <div className="text">
      <form>
        <br />
        <label>Name</label>
        <input
        />
        <br/>
        <label>Message</label>
        <textarea
        />
        <br/>
        <button onClick={setForm}>submit</button>
      </form>
    </div>
  );
}



