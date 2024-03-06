import React, { FC } from 'react';
import { TopWave, MidWave, BottomWave } from '../App.styles';

const Waves: FC = () => (
	<>
		<TopWave
			fill='none'
			width='150%'
			height='180%'
			viewBox='0 0 400 892'
			className='wave top-wave'
			preserveAspectRatio='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M-147 139.5C186.802 -173.693 824 374 1395.5 51.5C1967 -271 1526 1047.5 1526 1047.5L-381.5 1069C-381.5 1069 -480.802 452.693 -147 139.5Z'
				fill='#130E55'
			/>
		</TopWave>
		<MidWave
			width='100%'
			height='180%'
			viewBox='0 0 400 200'
			fill='none'
			className='wave mid-wave'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill='#461d61'
				d='M-36.3726 60.7338C133.789 77.5408 211 95.7339 419.245 5.0795C627.491 -85.5749 405 1067.23 405 1067.23H-36.3726C-36.3726 1067.23 -206.534 43.9267 -36.3726 60.7338Z'
			/>
		</MidWave>
		<BottomWave
			width='100%'
			height='180%'
			viewBox='0 0 300 100'
			className='wave bottom-wave'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path fill='#8d75eb' d='M-1 100C21.5985 10 308.993 100 393 100V1033H-1V100Z' />
		</BottomWave>
	</>
);

export default Waves;
