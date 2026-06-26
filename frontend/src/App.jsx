import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

//Import the homePage
import HomePage from './Pages/HomePage.jsx';
import MessagingPage from './Pages/MessagingPage.jsx';
import TopicsPage from './Pages/TopicsPage.jsx';

function App() {
  

  return (

    <BrowserRouter>
      <Routes>
        {/* Homepage */}
          <Route path= '/' element = {<HomePage />} />

        {/* Messaging page */}
         <Route path="/messaging" element={<MessagingPage />} />

        {/* Topics page */}
         <Route path="/topicsPage" element={<TopicsPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
