import React from "react";

const StepSelect = ({ setStep }) => {
  return (
    <aside className="uppercase bg-sidebar-desktop bg-contain bg-no-repeat">
      <div>
        <button onClick={() => setStep(1)}>1</button>
        <div>
          <p>Step 1</p>
          <p>Your info</p>
        </div>
      </div>
      <div>
        <button onClick={() => setStep(2)}>2</button>
        <div>
          <p>Step 2</p>
          <p>Select plan</p>
        </div>
      </div>
      <div>
        <button onClick={() => setStep(3)}>3</button>
        <div>
          <p>Step 3</p>
          <p>Add-ons</p>
        </div>
      </div>
      <div>
        <button onClick={() => setStep(4)}>4</button>
        <div>
          <p>Step 4</p>
          <p>Summary</p>
        </div>
      </div>
    </aside>
  );
};

export default StepSelect;
