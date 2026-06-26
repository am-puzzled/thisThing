
import './homePage.css';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import {Link} from "react-router-dom";

// Homepage component
function HomePage() {
  return (
       
    <>
            {/* Default Header */}
             <Header/>

            {/* Main */}
                <main className="homepage">
                    {/* Page header */}
                    <section className="hero-section">
                        <h1>Welcome to Network Website</h1>
                        <p>Explore our featured sections below.</p>
                    </section>

                    {/* Card container */}
                    <section className="card-container">

                        <Link to="/messaging" className="card-link">
                            {/* First card */}
                            <div className="video-card">
                            <div className="card-thumbnail"></div>

                            <div className="card-content">
                                <h2>Messaging</h2>
                                <p>
                                Dive deep into what happens when you send a message to another user
                                </p>
                            </div>
                            </div>
                        </Link>

                        <Link to = "" className= "">
                            {/* Second card */}
                            <div className="video-card">
                            <div className="card-thumbnail"></div>

                            <div className="card-content">
                                <h2>OSI Model</h2>
                                <p>
                                Dive deep into how the OSI Model works
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

export default HomePage;