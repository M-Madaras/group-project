import { useState, useEffect } from 'react'
import AddMessage from './AddMessage';

export default function MessageCard () {
  const [formSubmitted, setFormSubmitted] = useState(<AddMessage/>);
  const [validForm, setValidForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({});

  return (
    <div className="text-box">
        <label>Message Card</label>
        <form>
        <textarea> 
           
        </textarea>

       <br/>

        </form>

    </div>

  );

}