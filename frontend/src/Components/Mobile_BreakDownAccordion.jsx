import "./Mobile_BreakDownAccordion.css";
import Right_BreakDownPanel from "./Right_BreakDownPanel.jsx";

function Mobile_BreakDownAccordion({
  steps,
  activeStep,
  setActiveStep,
  savedMessage,
}) {
  return (
    <section className="mobile-breakdown-accordion">
      <h3 className="accordion-title">Steps</h3>

      {steps.map((step) => {
        const isOpen = activeStep === step.id;

        return (
          <div
            key={step.id}
            className={`accordion-item ${isOpen ? "open" : ""}`}
          >
            <button
              className="accordion-header"
              onClick={() => setActiveStep(step.id)}
            >
              <div className="accordion-left">
                <span className="accordion-number">{step.id}</span>
                <span>{step.title}</span>
              </div>

              <span className="accordion-arrow">
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {isOpen && (
              <div className="accordion-content">
                <p>hey</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Mobile_BreakDownAccordion;