import React, { useState, useEffect } from "react";
const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [text, setText] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // if (!firstName) alert("firstname is manadatory");
          // else if (!lastName) alert("lastname is manadatory");
          // else setText(`Full Name: ${firstName} ${lastName}`);
        }}
      >
        <div>
          First Name:
          <input type="text" onChange={handleFirstName} required />
        </div>
        <div>
          Last Name:
          <input type="text" onChange={handleLastName} required />
          <div>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
      <p>{text}</p>
    </>
  );
};

export default FullNameDisplay ;
