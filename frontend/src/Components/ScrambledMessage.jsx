import './ScrambledMessage.css'

function ScramledMessage({scrambledMessage, bubbleColor}){

    return(
        <>
            {/* Below is a box that will look like the yellow-whatsapp message box */}
             <div className="diagram-message">
                <div 
                  className="scrambled-message-bubble"
                  style={{ backgroundColor: bubbleColor }}
                >
                    <p>{scrambledMessage || "Kj9!"}</p> 
                </div>
             </div>
        </>
    );
}

export default ScramledMessage;