import React, { useState /* useEffect */ } from "react";
import "./Contact.scss";
/* import { db } from "../firebase"; */

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    /* db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      }); */

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      {/* <label>Name</label> */}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* <label>Email</label> */}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {/* <label>Choose a subject</label> */}
      <select id="field" name="jobs" required>
        <option value="choose">Choose a subject</option>
        <option value="web-dev">Web Developer</option>
        <option value="Online-marketing">Online Marketing</option>
        <option value="both">Both</option>
      </select>

      {/* <label>Message</label> */}
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <div className="check-box">
        <input type="checkbox" id="t-and-c" name="name" />
        <label for="t-and-c">
          I accept the <a href="https://link.com">terms and conditions</a>
        </label>
      </div>

      <button
        type="submit"
        // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
