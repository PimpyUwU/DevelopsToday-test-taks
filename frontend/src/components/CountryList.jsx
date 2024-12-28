import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCountries } from '../services/CountryService.jsx';

const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getCountries();
            setCountries(data);
        };

        fetchCountries();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Countries List</h2>
            <ul className="list-group">
                {countries.map((country) => (
                    <li key={country.name} className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to={`/country/${country.code}`} className="text-decoration-none text-dark">
                            {country.name}
                        </Link>
                        {/* Optionally, you can add other info like population, code, etc. */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
