import React from 'react';
import { PropertiesProvider } from './src/context/PropertiesContext';
// highlight-start
export const wrapRootElement = ({ element }) => (
	<PropertiesProvider>{element}</PropertiesProvider>
);
// highlight-end
