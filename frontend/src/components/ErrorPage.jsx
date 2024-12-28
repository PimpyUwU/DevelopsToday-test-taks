import React from 'react';

const ErrorPage = ({ message }) => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    <h2 className="text-danger">Error</h2>
                    <p className="text-muted">{message}</p>
                    <div>
                        <a href="/" className="btn btn-primary mt-3">Go back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
