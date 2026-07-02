import "./Right_BreakDownPanel.css";
import {useState} from 'react';

// react-icons
import { FaKey } from "react-icons/fa";
import { MdEnhancedEncryption } from "react-icons/md";
import { MdNoEncryptionGmailerrorred } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

//jsx files
import TypedMessage from './TypedMessage.jsx';
import ScramledMessage from '../Components/ScrambledMessage.jsx';
import GlassPackage from "./GlassPackage";
import GlassPackage_Taller from "./GlassPackage_Taller.jsx";



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
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [needsEncryptClick, setNeedsEncryptClick] = useState(false); // you need a state, hence the encryption button will always be breathing

  //for decryption
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [needsDecryptClick, setNeedsDecryptClick] = useState(false);

  const [scrambledMessage, setScrambledMessage] = useState("");
  const [encryptedColor, setEncryptedColor] = useState("#ea9fea");

  //for sealing
  const [isSealed, setIsSealed] = useState(false);

  //for building the packet
  const [isBuilt, setIsBuilt] = useState(false);

  //for sending the packet
  const [packetPosition, setPacketPosition] = useState("sender");


 //Functions
  //1.for encryption 
  function handleEncrypt() {
    setIsEncrypting(true);

    setTimeout(() => {
      setScrambledMessage(
        `${selectedKey}#${Math.random().toString(36).slice(2, 3)}`
      );

      //you want the colour of the scrambled message to change only after loading
      setEncryptedColor(keyColors[selectedKey]);

      setIsEncrypting(false);
      setNeedsEncryptClick(false);
      setIsEncrypted(true);
    }, 2000);
  }

  //2.for Decryption
   function handleDecrypt() {
      setIsDecrypting(true);

      setTimeout(() => {
        setIsDecrypting(false);
        setNeedsDecryptClick(false);
        setIsDecrypted(true);

      }, 2000);
   }

   //3.for sealing
    function handleSeal() {
      setIsSealed(true);
    }

   //4.for building
    function handleBuild() {
      setIsBuilt(true);
    }

    //5. for sending
    function handleSendPacket() {
      setPacketPosition("sender");

      setTimeout(() => {
        setPacketPosition("server");
      }, 1500);

      setTimeout(() => {
        setPacketPosition("receiver");
      }, 2500);
    }

  //6. For controlling the animation panel
   //You need to switch what is displayed for each and every step on the diagram box
  function renderAnimationStage() {
    switch (activeStep) {
        case 1:
          return (
              < TypedMessage  savedMessage = {savedMessage} />
          );

        // Encryption
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

                    {/* Don't show anything until message has been encrypted */}
                    {isEncrypted && (
                      <ScramledMessage scrambledMessage={scrambledMessage}  bubbleColor={encryptedColor}/>
                    )}

                  </div>              
              </>
          );

        // sesling the message
        case 3:
          return (
            <div className="seal-step-flow">
              <div className="seal-item">
                <p className="seal-label">Encrypted Message</p>
                <ScramledMessage
                  scrambledMessage={scrambledMessage}
                  bubbleColor={encryptedColor}
                />
              </div>

              <FaPlus className="seal-plus-icon" />

              <div className="seal-item">
                <p className="seal-label">Digital Seal</p>
                <div className="digital-seal-box">
                  <IoShieldCheckmarkOutline className="digital-seal-icon" />
                </div>
              </div>

              <button className="seal-button" onClick={handleSeal}>
                <CiLock className="seal-button-icon" />
                <span>Seal</span>
              </button>

              {/* Nothing should appear unless the user clicks seal button */}
              {isSealed && (
                <div className="sealed-package">
                  <p className="seal-label">Sealed Package</p>

                 <GlassPackage>
                    <ScramledMessage
                      scrambledMessage={scrambledMessage}
                      bubbleColor={encryptedColor}
                    />

                    <div className="digital-seal-box">
                      <IoShieldCheckmarkOutline className="digital-seal-icon" />
                    </div>

                    <CiLock className="package-lock-icon" />
                  </GlassPackage>
                </div>
              )}
            </div>
          );

        case 4:
          return (
            <div className="build-packet-flow">
              <div className="packet-item">
                <p className="packet-label">Sealed Package</p>

                <GlassPackage>
                  <ScramledMessage
                    scrambledMessage={scrambledMessage}
                    bubbleColor={encryptedColor}
                  />

                  <div className="digital-seal-box">
                    <IoShieldCheckmarkOutline className="digital-seal-icon" />
                  </div>

                  <CiLock className="package-lock-icon" />
                </GlassPackage>
              </div>

              <FaPlus className="packet-plus-icon" />

              <div className="packet-card recipient-card">
                <p className="packet-label">Recipient Info</p>

                <div className="packet-card-inner">
                  <IoMdContact className="packet-card-icon user-icon" />

                  <div>
                    <h4>Alice</h4>
                    <p>Public Key:</p>
                    <span>A1B2...9Z8Y</span>
                  </div>
                </div>
              </div>

              <FaPlus className="packet-plus-icon" />

              <div className="packet-card metadata-card">
                <p className="packet-label">Metadata</p>

                <div className="packet-card-inner">
                  <FaRegClock className="packet-card-icon clock-icon" />

                  <div>
                    <p>Time: 2025-05-14</p>
                    <p>10:30:00</p>
                    <span>Alg: RSA-OAEP + SHA-256</span>
                  </div>
                </div>
              </div>

              <button className="build-button" onClick={handleBuild}>
                <CiLock className="seal-button-icon" />
                <span>Build</span>
              </button>

              <FaArrowRight className="packet-arrow-icon" />

              {/* Nothing should appear unless the user clicks build button */}
              {isBuilt && (

                  <div className="packet-item">
                    <p className="packet-label">Ready Packet</p>

                    <GlassPackage_Taller>
                      <div className="ready-packet-stack">
                        {/* <div className="packet-row purple-row"> */}
                           <GlassPackage>
                               <ScramledMessage 
                                 scrambledMessage={scrambledMessage}
                                 bubbleColor={encryptedColor}
                               />

                               <div className="digital-seal-box">
                                <IoShieldCheckmarkOutline className="digital-seal-icon" />
                               </div>
                            </GlassPackage>
                        {/* </div> */}

                        <div className="packet-row blue-row">
                          <IoMdContact />
                          <span>Alice — Public Key: A1B2...9Z8Y</span>
                        </div>

                        <div className="packet-row green-row">
                          <FaRegClock />
                          <span>Time: 2025-05-14 10:30:00</span>
                        </div>
                      </div>
                    </GlassPackage_Taller>
                  </div>
              )} 
            </div>
          );

        case 5:
          return (
              <div className="send-packet-step">
                <div className="send-packet-flow">
                  <div className="network-node sender-node">
                    {packetPosition === "sender" && <IoMdContact />}

                      <h4>Sender</h4>

                     
                         <GlassPackage_Taller>
                            <div className="ready-packet-stack">
                              {/* <div className="packet-row purple-row"> */}
                                <GlassPackage>
                                    <ScramledMessage
                                      scrambledMessage={scrambledMessage}
                                      bubbleColor={encryptedColor}
                                    />

                                    <div className="package-seal small">
                                      <IoShieldCheckmarkOutline className="package-seal-icon" />
                                    </div>

                                    <CiLock className="package-lock-icon" />
                                  </GlassPackage>
                              {/* </div> */}

                              <div className="packet-row blue-row">
                                <IoMdContact />
                                <span>Alice — Public Key: A1B2...9Z8Y</span>
                              </div>

                              <div className="packet-row green-row">
                                <FaRegClock />
                                <span>Time: 2025-05-14 10:30:00</span>
                              </div>
                            </div>
                          </GlassPackage_Taller>
                      </div>
                 

                  <div className="network-node server-node">
                    {packetPosition === "server" && <IoMdContact />}
                     <h4>WhatsApp Servers</h4>
                  </div>

                  <div className="network-node receiver-node">
                    {packetPosition === "receiver" && <IoMdContact />}
                       <h4>Receiver</h4>
                  </div>
                </div>

                {/* send button */}
                <button className="send-packet-button" onClick={handleSendPacket}>
                  Send Packet
                </button>
              </div>
          );

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

                  {/* Don't show anything until message has been decrypted */}
                  {isDecrypted && (
                     <TypedMessage savedMessage={savedMessage} />
                  )}
  
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