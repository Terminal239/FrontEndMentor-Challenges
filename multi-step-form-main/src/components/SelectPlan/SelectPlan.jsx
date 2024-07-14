import React from "react";
import ArcadeLogo from "../../assets/images/icon-arcade.svg";
import AdvancedLogo from "../../assets/images/icon-advanced.svg";
import ArcadePro from "../../assets/images/icon-pro.svg";

const SelectPlan = () => {
  return (
    <>
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <article>
          <div>
            <img src={ArcadeLogo} alt="arcade logo" />
          </div>
          <div>
            <h3>Arcade</h3>
            <p>$9/mo</p>
            <p></p>
          </div>
        </article>
        <article>
          <div>
            <img src={AdvancedLogo} alt="arcade logo" />
          </div>
          <div>
            <h3>Arcade</h3>
            <p>$12/mo</p>
            <p></p>
          </div>
        </article>
        <article>
          <div>
            <img src={ArcadePro} alt="arcade logo" />
          </div>
          <div>
            <h3>Arcade</h3>
            <p>$15/mo</p>
            <p></p>
          </div>
        </article>
      </div>
      <div>
        <span>Monthly</span>
        <button></button>
        <span>Yearly</span>
      </div>
      <div>
        <button>Go back</button>
        <button>Next step</button>
      </div>
    </>
  );
};

export default SelectPlan;
