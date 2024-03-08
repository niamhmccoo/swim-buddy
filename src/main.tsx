import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { LOCATIONS } from './locations.ts';
import LocationDataDisplay from './components/LocationDataDisplay.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	...LOCATIONS.map((location) => ({
		path: `/${location.label}`,
		element: <LocationDataDisplay location={location} />,
	})),
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
