
import {useState, useEffect} from 'react';

//import components
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import BreakDownPanel from '../Components/BreakDownPanel.jsx';
import HeroAnimationPanel from '../Components/HeroAnimationPanel.jsx';


     const steps = [
            {
                id: 1,
                title: "You Type",
                animationDescription:
                "Try typing & sending something in the text box below.",
                explanation:
                "After typing, your message exists as normal readable text inside the app. Everyone can read it."
            },

            {
                id: 2,
                title: "Encryption",
                animationDescription:
                "We need to scramble the message so that no one can read it now.",
                explanation:
                "The message is: -- combined with a secret key,--run through an encryption algorithm -- to form a scrambled message."
            },

            {
                id: 3,
                title: "Seal the Message",
                animationDescription:
                "The encrypted message is locked inside a secure container.",
                explanation:
                "The scrambled message is sealed so that nobody can change it while it travels across the internet."
            },

            {
                id: 4,
                title: "Build the Packet",
                animationDescription:
                "The sealed message is placed inside a network packet.",
                explanation:
                "Extra information such as the sender, receiver, and routing details are added. This helps the network know where to deliver the message."
            },

            {
                id: 5,
                title: "Send the Packet",
                animationDescription:
                "The packet begins its journey across the internet.",
                explanation:
                "The packet travels through Wi-Fi routers, internet providers, and WhatsApp servers on its way to the receiver."
            },

            {
                id: 6,
                title: "Decryption",
                animationDescription:
                "The receiver unlocks and unscrambles the message.",
                explanation:
                "Using a matching secret key, the receiver converts the scrambled message back into readable text."
            },

            {
                id: 7,
                title: "Message Received",
                animationDescription:
                "The original message is displayed on the receiver's screen.",
                explanation:
                "The receiver sees exactly what was typed by the sender. The journey from typing to delivery is now complete."
            }
        ];
        

    function TopicsPage() {

        // constants
        const [message, setMessage] = useState("");
        const [savedMessage, setSavedMessage] = useState ("");
        const [activeStep, setActiveStep] = useState(1);

         //so that the page always loads from the top, and not from the current scroll position
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [activeStep]);

        // function
        function sendMessage (){
            const typedMessage = message;
            console.log("typed message:", typedMessage);


            //save the messae
            setSavedMessage(typedMessage);
            console.log(savedMessage);
            
            //clear the message box
            setMessage("");
        };

        return (
            <>
                {/* Default Header */}
                < Header/>

                {/* Main */}
                <main>
                    <HeroAnimationPanel
                        steps={steps}
                        activeStep={activeStep}
                        message = {message}
                        savedMessage={savedMessage}
                        setMessage = {setMessage}
                        sendMessage = {sendMessage}
                    />

                    <BreakDownPanel
                        steps={steps}
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                        savedMessage={savedMessage}

                    />
                </main>        

                {/* Footer */}
                <Footer />
            </>

        )

    }

    export default TopicsPage;