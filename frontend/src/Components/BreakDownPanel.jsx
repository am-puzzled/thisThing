import './BreakDownPanel.css';
import Left_BreakDownPanel from './Left_BreakDownPanel.jsx';
import Right_BreakDownPanel from '../Components/Right_BreakDownPanel.jsx';
import {Link} from "react-router-dom";

function BreakDownPanel({ steps, activeStep, setActiveStep, savedMessage }) {
  return (
    <section className="breakdown-panel">
      <Left_BreakDownPanel
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />

      <Right_BreakDownPanel
        steps={steps}
        activeStep={activeStep}
        savedMessage = {savedMessage}
      />
    </section>
  );
}

export default BreakDownPanel;