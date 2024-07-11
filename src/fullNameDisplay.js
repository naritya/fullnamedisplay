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
      <form onSubmit={(e)=>{e.preventDefault();
        setText(`Full Name: ${firstName} ${lastName}`);
      }}>
        {/* // onSubmit={(e) => {
        //   e.preventDefault();
          // if (!firstName) alert("firstname is manadatory");
          // else if (!lastName) alert("lastname is manadatory");
          // else setText(`Full Name: ${firstName} ${lastName}`);
      //   }}
      // > */}
        <div>
          First Name:
          <input type="text" onChange={handleFirstName}  />
        </div>
        <div>
          Last Name:
          <input type="text" onChange={handleLastName} />
          <div>
          <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      {firstName&&lastName&&<p>{text}</p>}
    </>
  );
};

export default FullNameDisplay ;
