import "./Left_BreakDownPanel.css";

function Left_BreakDownPanel({ steps, activeStep, setActiveStep }) {
  return (
    <aside className="left-breakdown-panel">
      <h3>Steps</h3>

      <div className="step-list">
        {steps.map((step) => (
          <button
            key={step.id}
            className={
              activeStep === step.id ? "step-item active" : "step-item"
            }
            onClick={() => setActiveStep(step.id)}
          >
            <span className="step-number">{step.id}</span>
            <span>{step.title}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Left_BreakDownPanel;