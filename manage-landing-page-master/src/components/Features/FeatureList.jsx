import React from "react";

const FeatureList = () => {
  return (
    <div className="features__list">
      <article className="features__item">
        <span className="features__marker">01</span>
        <h3>Track company-wide progress</h3>
        <p>
          See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the
          milestone level all the way done to the smallest of details. Never lose sight of the
          bigger picture again.
        </p>
      </article>
      <article className="features__item">
        <span className="features__marker">02</span>
        <h3>Advanced built-in reports</h3>
        <p>
          Set internal delivery estimates and track progress toward company goals. Our customisable
          dashboard helps you build out the reports you need to keep key stakeholders informed.
        </p>
      </article>
      <article className="features__item">
        <span className="features__marker">03</span>
        <h3>Everything you need in one place </h3>
        <p>
          Stop jumping from one service to another to communicate, store files, track tasks and
          share documents. Manage offers an all-in-one team productivity solution.
        </p>
      </article>
    </div>
  );
};

export default FeatureList;
