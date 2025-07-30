// src/Contact.js
import React from "react";

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div>
          <label>Query:</label>
          <textarea placeholder="Your Query"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
