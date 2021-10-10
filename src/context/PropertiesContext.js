import React, { useState, createContext, useContext } from 'react';

//TODO: Should we use context for all of the filtered properties?
//TODO: (Using context for filtered properties enables cross-page filtering);

const PropertiesContext = React.createContext();

export const PropertiesProvider = ({ children }) => {
	const [selectedProperty, setSelectedProperty] = useState('');
	const [filteredProperties, setFilteredProperties] = useState([]);

	return (
		<PropertiesContext.Provider
			value={{
				selectedProperty,
				setSelectedProperty,
				filteredProperties,
				setFilteredProperties,
			}}
		>
			{children}
		</PropertiesContext.Provider>
	);
};

export default PropertiesContext;
