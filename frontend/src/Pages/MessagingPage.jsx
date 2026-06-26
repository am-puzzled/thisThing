import './messagingPage.css';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import {Link} from 'react-router-dom';

function MessagingPage (){

    return(
        <>
            {/* Default Header */}
             < Header/>

            {/* Main */}
             <main className='messaging-page'>

                {/* page heading */}
                <section className='messaging-hero'>
                    <h1>Messaging Topics</h1>
                    <p>Search or choose a popular Topic to learn what happens behind the scenes</p>
                </section>

                {/* Search Area */}
                <section className='search-section'>
                    {/* Search Input */}
                    <input
                        type='text'
                        className='search-bar'
                        placeholder='Search a topic ..'
                    />
                </section>
                  
                <section className="card-container">
                    {/* A list of topic cards related to whatsapp messaging */}
                        {/* Card 1 -- End to end encrption */}
                            <Link to="/topicsPage" className="encryption-card">
                                {/* First card */}
                                <div className="video-card">
                                    <div className="card-thumbnail"></div>

                                    <div className="card-content">
                                        <h2>Encryption</h2>
                                        <p>
                                            How end-to-end encryption works
                                        </p>
                                    </div>
                                </div>
                            </Link>


                            {/* Card 2 -- End to end encrption */}
                            <Link to="/topicsPage" className="encryption-card">
                                {/* First card */}
                                <div className="video-card">
                                    <div className="card-thumbnail"></div>

                                    <div className="card-content">
                                        <h2>Servers</h2>
                                        <p>
                                            How messages travel through servers
                                        </p>
                                    </div>
                                </div>
                            </Link>

                             {/* Card 3 -- End to end encrption */}
                            <Link to="/topicsPage" className="encryption-card">
                                {/* First card */}
                                <div className="video-card">
                                    <div className="card-thumbnail"></div>

                                    <div className="card-content">
                                        <h2>Delivery</h2>
                                        <p>
                                            How message delivery works
                                        </p>
                                    </div>
                                </div>
                            </Link>
                </section>

                
             </main>

            {/* Footer */}
             <Footer />

            
        </>
    );
}

export default MessagingPage;