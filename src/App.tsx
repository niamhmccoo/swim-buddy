import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const bob = (
	selector: string,
	initialY: string,
	swipeInDuration: number,
	finalY: string,
	bobDuration: number,
	bobDelay: number
) => {
	gsap.to(selector, {
		duration: swipeInDuration,
		y: initialY,
		ease: 'elastic.out(0.5, 0.75)',
		onComplete: () => {
			gsap.to(selector, {
				duration: bobDuration,
				y: finalY,
				ease: 'sine.inOut',
				yoyo: true,
				repeat: -1,
				delay: bobDelay,
			});
		},
	});
};

const App = () => {
	useGSAP(() => {
		bob('.bottom-wave-svg', '-50%', 4, '-49.75%', 5, 0);
		bob('.mid-wave-svg', '-45%', 4.5, '-45.6%', 6, 0.95);
		bob('.top-wave-svg', '-2%', 5, '-1.25%', 5, 1.6);
	}, {});

	return (
		<div className='wrap'>
			<svg
				fill='none'
				width='150%'
				height='180%'
				viewBox='0 0 400 892'
				className='top-wave-svg'
				preserveAspectRatio='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M-147 139.5C186.802 -173.693 824 374 1395.5 51.5C1967 -271 1526 1047.5 1526 1047.5L-381.5 1069C-381.5 1069 -480.802 452.693 -147 139.5Z'
					fill='#130E55'
				/>
			</svg>
			<svg
				width='100%'
				height='180%'
				viewBox='0 0 400 200'
				fill='none'
				className='mid-wave-svg'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill='#461d61'
					d='M-36.3726 60.7338C133.789 77.5408 211 95.7339 419.245 5.0795C627.491 -85.5749 405 1067.23 405 1067.23H-36.3726C-36.3726 1067.23 -206.534 43.9267 -36.3726 60.7338Z'
				/>
			</svg>
			<svg
				width='100%'
				height='180%'
				viewBox='0 0 300 100'
				className='bottom-wave-svg'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path fill='#8d75eb' d='M-1 100C21.5985 10 308.993 100 393 100V1033H-1V100Z' />
			</svg>
		</div>
	);
};

export default App;
