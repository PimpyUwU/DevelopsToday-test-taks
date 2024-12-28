import React from 'react';
import { Link } from 'react-router-dom';

const BorderCountry = ({ border }) => {
    return (
        <Link to={`/country/${border.countryCode}`} className="card-link">
            <div className="card mb-3" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{border.commonName}</h5>
                    <p className="card-text">
                        <strong>Official Name:</strong> {border.officialName}
                    </p>
                    <p className="card-text">
                        <strong>Country Code:</strong> {border.countryCode}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BorderCountry;
