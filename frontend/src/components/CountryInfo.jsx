import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryInfo } from '../services/countryService';
import PopulationChart from './PopulationChart';
import BorderCountry from './BorderCountry';
import ErrorPage from './ErrorPage';

const CountryInfo = () => {
    const { countryCode } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountryInfo = async () => {
            try {
                const data = await getCountryInfo(countryCode);
                if (!data) {
                    throw new Error("No data available for this country.");
                }
                setCountryInfo(data);
            } catch (error) {
                setError(error.message || "An error occurred while fetching country data.");
            }
        };

        fetchCountryInfo();
    }, [countryCode]);

    if (error) {
        return <ErrorPage message={error} />;
    }

    if (!countryInfo) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 text-center">
                    <h2>{countryInfo.name}</h2>
                    <h4>Official Name: {countryInfo.officialName}</h4>
                    <img src={countryInfo.flag} alt={`${countryInfo.name} flag`} className="img-fluid" />
                    <p><strong>Country Code:</strong> {countryInfo.countryCode}</p>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Bordering Countries</h3>
                    {countryInfo.borders.length > 0 ? (
                        <ul className="list-group">
                            {countryInfo.borders.map((borderCountry, index) => (
                                <li key={index} className="list-group-item">
                                    <BorderCountry border={borderCountry} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No bordering countries available.</p>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <h4 className="text-center mb-4">Population Growth Over Time</h4>
                {countryInfo.populationData.length > 0 ? (
                    <div className="chart-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                        <PopulationChart populationData={countryInfo.populationData} />
                    </div>
                ) : (
                    <p>No population data available.</p>
                )}
            </div>
        </div>
    );
};

export default CountryInfo;
