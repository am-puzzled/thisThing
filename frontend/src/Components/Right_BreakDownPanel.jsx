import "./Right_BreakDownPanel.css";
import {useState} from 'react';

// react-icons
import { FaKey } from "react-icons/fa";
import { MdEnhancedEncryption } from "react-icons/md";
import { MdNoEncryptionGmailerrorred } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

//jsx files
import TypedMessage from './TypedMessage.jsx';
import ScramledMessage from '../Components/ScrambledMessage.jsx';


function Right_BreakDownPanel({ steps, activeStep, savedMessage }) {
  const currentStep = steps.find((step) => step.id === activeStep);

  //for encryption animation
  const keys = ["K7M9", "X2Q8", "B4Z1"];
  const keyColors = {
    K7M9: "#ea9fea",
    X2Q8: "#fef08a",
    B4Z1: "#93c5fd"
  };
  // for encryption
  const [selectedKey, setSelectedKey] = useState("");
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [needsEncryptClick, setNeedsEncryptClick] = useState(false); // you need a state, hence the encryption button will always be breathing

  //for decryption
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [needsDecryptClick, setNeedsDecryptClick] = useState(false);

  const [scrambledMessage, setScrambledMessage] = useState("");
  const [encryptedColor, setEncryptedColor] = useState("#ea9fea");

  function handleEncrypt() {
    setIsEncrypting(true);

    setTimeout(() => {
      setScrambledMessage(
        `${selectedKey}#${Math.random().toString(36).slice(2, 14)}@X9!`
      );

      //you want the colour of the scrambled message to change only after loading
      setEncryptedColor(keyColors[selectedKey]);

      setIsEncrypting(false);
      setNeedsEncryptClick(false);
    }, 2000);
  }

   function handleDecrypt() {
      setIsDecrypting(true);

      setTimeout(() => {
        setIsDecrypting(false);
        setNeedsDecryptClick(false);
      }, 2000);
   }

   //You need to switch what is displayed for each and every step on the diagram box
  function renderAnimationStage() {
    switch (activeStep) {
        case 1:
          return (
              < TypedMessage  savedMessage = {savedMessage} />
          );

        case 2:
          return (
              <>
                <div className="encryption-flow">
                    <TypedMessage savedMessage={savedMessage} />

                    <FaPlus className="flow-icon plus-icon" />

                    <div className="key-section">
                      <FaKey className="flow-icon key-icon" title="Please Select a key you wish to Encrypt with" />

                      {/* show whatever key is clicked */}
                        <div className="key-options">
                          {keys.map((key) => (
                            <button
                              key={key}
                              className={
                                selectedKey === key ? "key-option active" : "key-option"
                              }
                              onClick={() =>
                                { 
                                setSelectedKey(key)
                                setNeedsEncryptClick(true);
                                }
                              }
                            >
                              {key}
                            </button>
                          ))}
                        </div>
                    </div>

                    <FaArrowRight className="flow-icon arrow-icon" />

                    <button className={
                        // If a key is selected, the encryption button breathes until clicked
                              needsEncryptClick && !isEncrypting
                                ? "encrypt-button needs-click"
                                : "encrypt-button"
                            } 
                            onClick={handleEncrypt}
                            title="Click to Encrypt"
                    >
                      {/* While encrypting show a loader, otherwise show the lock */}
                      {isEncrypting ? 
                        (
                          <div className="loader"></div>
                        ) : (
                          <MdEnhancedEncryption className="lock-box-icon" />
                        )
                      }

                      <span>{isEncrypting ? "Encrypting..." : "Encrypt"}</span>
                    </button>

                    
                    <FaArrowRight className="flow-icon arrow-icon" />

                    <ScramledMessage scrambledMessage={scrambledMessage}  bubbleColor={encryptedColor}/>
                  </div>              
              </>
          );

        case 3:
         return (
          <>
               <ScramledMessage scrambledMessage={scrambledMessage}  bubbleColor={encryptedColor}/>
               <FaPlus className="flow-icon plus-icon" />
               <IoShieldCheckmarkOutline />

          </>
         );

        case 4:
        return <p>Build packet animation will appear here.</p>;

        case 5:
        return <p>Send packet animation will appear here.</p>;

        case 6:
          return (
            <>
               <div className="encryption-flow">
                  <ScramledMessage scrambledMessage={scrambledMessage}  bubbleColor={encryptedColor}/>

                  <FaPlus className="flow-icon plus-icon" />

                  <div className="key-section">
                    <FaKey className="flow-icon key-icon" title="Please Select a key you wish to Decrypt with" />

                    {/* show whatever key is clicked */}
                      <div className="key-options">
                        {keys.map((key) => (
                          <button
                            key={key}
                            className={
                              selectedKey === key ? "key-option active" : "key-option"
                            }
                            onClick={() =>
                              { 
                              setSelectedKey(key)
                              setNeedsDecryptClick(true);
                              }
                            }
                          >
                            {key}
                          </button>
                        ))}
                      </div>
                  </div>

                  <FaArrowRight className="flow-icon arrow-icon" />

                    <button className={
                        // If a key is selected, the Decryption button breathes until clicked
                              needsDecryptClick && !isDecrypting
                                ? "encrypt-button needs-click"
                                : "encrypt-button"
                            } 
                            onClick={handleDecrypt}
                            title="Click to Decrypt"
                    >
                      {/* While Decrypting show a loader, otherwise show the lock */}
                      {isDecrypting ? 
                        (
                          <div className="loader"></div>
                        ) : (
                          <MdNoEncryptionGmailerrorred className="lock-box-icon-decrypt" />
                        )
                      }

                      <span>{isDecrypting ? "Decrypting..." : "Decrypt"}</span>
                    </button>

                  <FaArrowRight className="flow-icon arrow-icon" />

                  <TypedMessage savedMessage={savedMessage} />
                  
                </div>              
            </>
        );

        case 7:
        return <TypedMessage  savedMessage = {savedMessage} />

        default:
        return <p>Animation and summary for this step will appear here.</p>;
    }
  }

  return (
    <div className="right-breakdown-panel">
      <h3> What's happening in this step ?</h3>

      <p>
        {currentStep?.explanation}
      </p>

      <div className="diagram-box">
        {renderAnimationStage()}
      </div>
    </div>
  );
}

export default Right_BreakDownPanel;