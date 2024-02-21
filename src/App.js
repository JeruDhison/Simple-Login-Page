import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [errMsg, setErrMsg] = useState({});
  const [isSub, setIsSub] = useState(false);
  const db = [
    {
      name: "jeru",
      pass: "pass1",
    },
    {
      name: "jash",
      pass: "pass2",
    },
  ];
  const err = {
    name: "Invalid Username",
    pass: "invalid password",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var { name, pass } = document.forms[0];

    const userData = db.find((user) => user.name === name.value);

    if (userData) {
      if (userData.pass !== pass.value) {
        setErrMsg({ name: "pass", message: err.pass });
      } else {
        setIsSub(true);
      }
    } else {
      setErrMsg({ name: "name", message: err.name });
    }
  };
  const renderErrMsg = (name) =>
    name === errMsg.name && <div className="error">{errMsg.message}</div>;

  const Form = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="container" id="home">
          <label>Name</label>
          <input type="text" name="name" required />
          {renderErrMsg("name")}
        </div>
        <div className="container">
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderErrMsg("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Simple Login page</div>
        {isSub ? (
          <div>
            User is successfully logged in
            <br />
            <a href="/">
              <button className="back-button">Back</button>
            </a>
          </div>
        ) : (
          Form
        )}
      </div>
    </div>
  );
};

export default App;
