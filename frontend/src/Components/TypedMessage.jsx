import './TypedMessage.css'

function TypedMessage({savedMessage}){

    return(
        <>
            {/* Below is a box that will look like the green-whatsapp message box */}
             <div className="diagram-message">
                <div className="message-bubble">
                    {savedMessage || "Your Message will appear here"}
                </div>
             </div>
        </>
    );
}

export default TypedMessage;