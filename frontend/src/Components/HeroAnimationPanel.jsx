import "./HeroAnimationPanel.css";
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa";

import TypedMessage from './TypedMessage.jsx';
import ScrambledMessage from './ScrambledMessage.jsx';



function HeroAnimationPanel({ steps, activeStep, message, setMessage, sendMessage, savedMessage}) {



  const currentStep = steps.find(
    (step) => step.id === activeStep
  );

  //You need to switch what is displayed for each and every step
  function renderAnimationStage() {
    switch (activeStep) {
        case 1:
        return (
            <div className="whatsapp-input-box">
            <input
                type="text"
                placeholder="Type a message..."
                className="whatsapp-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button className="whatsapp-send-btn" onClick={sendMessage}>
                ➤
            </button>
            </div>
        );

        case 2:
            return (
                <>
                    <TypedMessage  savedMessage = {savedMessage} />
                        <FaArrowRight className="flow-icon arrow-icon" />
                    <ScrambledMessage />

                    
                </>
            );

        case 3:
        return <p>Seal message animation will appear here.</p>;

        case 4:
        return <p>Build packet animation will appear here.</p>;

        case 5:
        return <p>Send packet animation will appear here.</p>;

        case 6:
            return (
                <>
                    <ScrambledMessage />
                         <FaArrowRight className="flow-icon arrow-icon" />
                    <TypedMessage  savedMessage = {savedMessage} />
                       
                </>
            );

        case 7:
        return <TypedMessage  savedMessage = {savedMessage} /> ;

        default:
        return <p>Animation and summary for this step will appear here.</p>;
    }
  }

  return (
    <section className="hero-animation-panel">

      <div className="hero-top">
        <p>
          Step {activeStep} of {steps.length}
        </p>

        <h2>{currentStep?.title}</h2>

        <p className="hero-description">
            {currentStep?.animationDescription}
        </p>
      </div>

      <div className="animation-stage">
        {renderAnimationStage()}
      </div>

    </section>
  );
}

export default HeroAnimationPanel;