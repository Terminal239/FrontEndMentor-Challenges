import React from "react";

const Summary = () => {
  return (
    <>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      <div>
        <article>
          <div>
            <span>Arcade(Monthly)</span>
            <span>
              <button>Change</button>
            </span>
          </div>
          <span>$9/mo</span>
        </article>
        <article>
          <span>Online service</span>
          <span>+$1/mo</span>
        </article>
        <article>
          <span>Larger storage</span>
          <span>+$2/mo</span>
        </article>
      </div>
      <article>
        <span>Larger storage</span>
        <span>+$2/mo</span>
      </article>
      <div>
        <button>Go back</button>
        <button>Next step</button>
      </div>
    </>
  );
};

export default Summary;
