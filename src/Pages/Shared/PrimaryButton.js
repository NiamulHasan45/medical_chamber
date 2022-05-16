import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary upper font-bold">{children}</button>
    );
};

export default PrimaryButton;