import React, { useState } from "react";
import "./App.css";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errorName, setErrName] = useState("");
  const [errorEmail, setErrEmail] = useState("");
  const [validEmail, setvalidEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
    // setvalidEmail("");
  };
  const handleClick = () => {
    if (name == "") {
      setErrName("Required");
    }
    if (email == "") {
      setErrEmail("Required");
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        setvalidEmail("Enter valid email");
      }
    }
    if (name && email) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (regex.test(email)) {
        alert("subbited succesfully");
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => handleName(e)}
      />
      {name == "" ? <div class="one">{errorName}</div> : null}
      <br /> <br />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => handleEmail(e)}
      />
      {email == "" ? <div>{errorEmail}</div> : null}
      {validEmail !== "" ? <div>{validEmail}</div> : null}
      <br /> <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Home;
