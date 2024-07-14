import React from "react";

const YourInfo = () => {
  return (
    <div>
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="e.g. stephenking@lorem.com" />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YourInfo;
