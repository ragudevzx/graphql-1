import * as React from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [countriesFav, setCountriesFav] = React.useState([]);
    const [languagesFav, setLanguagesFav] = React.useState([]);
    const [continentsfav, setContinentsfav] = React.useState([]);

    const values = {
        countriesFav,
        languagesFav,
        continentsfav,
        setCountriesFav,
        setLanguagesFav,
        setContinentsfav
    }
    return (
        <DataContext.Provider value={values}>
            { children }
        </DataContext.Provider>
    )
}