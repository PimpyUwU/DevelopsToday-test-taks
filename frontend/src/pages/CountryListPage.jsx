import React from 'react';
import CountryList from '../components/CountryList.jsx';

const CountryListPage = () => {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <h2 className="text-center mb-4">Welcome to the Country List Page</h2>
                    <CountryList />
                </div>
            </div>
        </div>
    );
};

export default CountryListPage;
