import React from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from '../components/CountryInfo';

const CountryInfoPage = () => {
    const { countryCode } = useParams(); // Get the country code from URL params

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <h2 className="text-center mb-4">Country Information</h2>
                    <CountryInfo countryCode={countryCode} />
                </div>
            </div>
        </div>
    );
};

export default CountryInfoPage;
