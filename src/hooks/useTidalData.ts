import React, { useEffect, useState } from 'react';
import { getTidalData } from '../apis';

type Tides = {
	highTides: string[];
	lowTides: string[];
};

const useTidalData = (latitude: number, longitude: number): Tides => {
	const [data, setData] = useState<Tides>({ highTides: [], lowTides: [] });

	useEffect(() => {
		getTidalData(latitude, longitude)
			.then((tides) => {
				tides ? setData(tides) : console.log('Tides undefined');
			})
			.catch((error) => {
				console.error('Error fetching tidal data: ', error);
			});
	}, []);

	return data;
};

export default useTidalData;
