import { createContext, useState } from 'react';

export const DriverDataContext = createContext();

const DriverContext = ({ children }) => {
    const [driver, setDriver] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateDriver = (data) => {
        setDriver(data);
    };

    const value = {
        driver,
        setDriver,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateDriver,
    };

    return (
        <DriverDataContext.Provider value={value}>
            {children}
        </DriverDataContext.Provider>
    );
};

export default DriverContext;
