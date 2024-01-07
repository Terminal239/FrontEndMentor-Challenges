import React from "react";

const AddOns = () => {
  return (
    <>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        <article>
          <input type="checkbox" name="" id="" />
          <div>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$1/mo</span>
        </article>
        <article>
          <input type="checkbox" name="" id="" />
          <div>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$1/mo</span>
        </article>
        <article>
          <input type="checkbox" name="" id="" />
          <div>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$1/mo</span>
        </article>
      </form>
      <div>
        <button>Go back</button>
        <button>Next step</button>
      </div>
    </>
  );
};

export default AddOns;
