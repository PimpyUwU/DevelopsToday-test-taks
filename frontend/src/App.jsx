import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import CountryListPage from './pages/CountryListPage';
import CountryInfoPage from './pages/CountryInfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<CountryListPage />} />
                <Route path="/country/:countryCode" element={<CountryInfoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
