import React, { useState } from "react";

import StepSelect from "./components/StepSelect/StepSelect";
import AddOns from "./components/AddOns/AddOns";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import YourInfo from "./components/YourInfo/YourInfo";
import Summary from "./components/Summary/Summary";

const App = () => {
  const [step, setStep] = useState(1);
  let StepDisplay;
  switch (step) {
    case 1:
      StepDisplay = <YourInfo />;
      break;
    case 2:
      StepDisplay = <SelectPlan />;
      break;
    case 3:
      StepDisplay = <AddOns />;
      break;
    case 4:
      StepDisplay = <Summary />;
      break;
    default:
      break;
  }

  return (
    <div className="font-ubuntu-regular">
      <StepSelect setStep={setStep} />
      <div>{StepDisplay}</div>
    </div>
  );
};

export default App;
