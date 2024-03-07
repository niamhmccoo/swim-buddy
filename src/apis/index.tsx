/// <reference types="vite/client" />
import axios from 'axios';
import { DateTime } from 'luxon';

export const getTidalData = async (latitude: number, longitude: number) => {
	try {
		const res = await axios.get('https://api.marea.ooo/v2/tides', {
			headers: { 'x-marea-api-token': import.meta.env.VITE_TIDAL_API_KEY },
			params: {
				latitude,
				longitude,
			},
		});

		const filterTides = (tide: string) => {
			return res.data.extremes
				.filter((t) => t.state === tide)
				.map((t) => DateTime.fromISO(t.datetime).toFormat('HH.mm'));
		};

		return { highTides: filterTides('HIGH TIDE'), lowTides: filterTides('LOW TIDE') };
	} catch (error) {
		console.error('Error:', error);
	}
};
