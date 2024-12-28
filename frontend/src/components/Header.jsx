import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="mb-0">Country Explorer</h1>
                <nav>
                    <Link to="/" className="text-white text-decoration-none mx-3">
                        Home
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
