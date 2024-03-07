import React, { FC } from 'react';
import type { Location } from '../locations';
import { TideTime } from '../App.styles';
import useTidalData from '../hooks/useTidalData';
import { LocationWrap, InnerLocationWrap, SubHeader } from '../App.styles';

type LocationDataDisplayProps = {
	location: Location;
};

const formatTides = (tides) => {
	const sortedTides = tides
		.sort((a, b) => {
			const [aHrs, aMins] = a.split('.').map(Number);
			const [bHrs, bMins] = b.split('.').map(Number);
			return aHrs === bHrs ? aMins - bMins : aHrs - bHrs;
		})
		.map((time) => time.replace('.', ':'));
	return sortedTides.map((t) => <TideTime>{t}</TideTime>);
};

const LocationDataDisplay: FC<LocationDataDisplayProps> = ({ location }) => {
	const { highTides, lowTides } = useTidalData(location.latitude, location.longitude);

	return (
		<LocationWrap>
			<h1>{location.label}</h1>
			<SubHeader>TODAY</SubHeader>
			<InnerLocationWrap>
				<svg
					width='134'
					height='100'
					viewBox='0 0 134 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M45.6667 33.3032L49.4267 37.2163L64.3334 21.7303V55.5053H69.6667V21.7303L84.5467 37.2441L88.3334 33.3032L67.0001 11.1011L45.6667 33.3032Z'
						fill='#9EDFD8'
					/>
					<path
						d='M45.6667 33.3032L49.4267 37.2163L64.3334 21.7303V55.5053H69.6667V21.7303L84.5467 37.2441L88.3334 33.3032L67.0001 11.1011L45.6667 33.3032Z'
						stroke='#99F2DD'
					/>
					<path
						d='M5 84.8357C28.5 63.9997 26 106 47.5 84.8356C73.5 51.8359 72 106.835 95.5 84.8349C115.086 66.4997 113.5 92 129 84.8357'
						stroke='#99F2DD'
						stroke-width='2'
					/>
				</svg>
				{formatTides(highTides)}
				<SubHeader>HIGH TIDE{highTides.length > 1 ? `S` : ``}</SubHeader>
			</InnerLocationWrap>
			<InnerLocationWrap>
				<svg
					width='134'
					height='109'
					viewBox='0 0 134 109'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M86.0728 33.0242L82.1867 29.1553L66.8483 44.5344L66.7741 11.0669L61.2741 11.0791L61.3483 44.5465L45.9693 29.2081L42.0729 33.1217L64.1216 55.0729L86.0728 33.0242Z'
						fill='#99F2DD'
					/>
					<path
						d='M5 93.8357C28.5 72.9997 26 115 47.5 93.8356C73.5 60.8359 72 115.835 95.5 93.8349C115.086 75.4997 113.5 101 129 93.8357'
						stroke='#99F2DD'
						stroke-width='2'
					/>
				</svg>
				{formatTides(lowTides)}
				<p>LOW TIDE{lowTides.length > 1 ? `S` : ``}</p>
			</InnerLocationWrap>
		</LocationWrap>
	);
};

export default LocationDataDisplay;
