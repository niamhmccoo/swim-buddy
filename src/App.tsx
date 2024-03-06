import React from 'react';
import gsap from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import Waves from './components/Waves';
import DropdownMenu from './components/DropdownMenu';
import { Wrap, UiWrap, FlexWrap, Button } from './App.styles';

const locations: { name: string }[] = [
	{ name: 'Dollymount' },
	{ name: 'Half Moon' },
	{ name: 'Malahide' },
	{ name: 'Portmarnock' },
	{ name: 'Rush' },
	{ name: 'Skerries' },
];

const bob = (
	selector: string,
	initialY: string,
	swipeInDuration: number,
	swipeInDelay: number,
	finalY: string,
	bobDuration: number,
	bobDelay: number
) => {
	gsap.to(selector, {
		duration: swipeInDuration,
		y: initialY,
		delay: swipeInDelay,
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
	const [location, setLocation] = useState<string>('');
	const [moreOpen, setMoreOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleLocationSelect = (location: string) => {
		setLocation(location);
		navigate(`/${location}`);
	};

	useGSAP(() => {
		bob('.bottom-wave', '-50%', 4, 0.3, '-49.75%', 5, 0);
		bob('.mid-wave', '-45%', 4.5, 0.4, '-45.6%', 6, 0.95);
		bob('.top-wave', '-2%', 5, 0.5, '-1.25%', 5, 1.6);
	}, {});

	return (
		<Wrap>
			<Waves />
			<UiWrap>
				<h1>Where to?</h1>
				<FlexWrap>
					<Button onClick={() => handleLocationSelect('40Foot')}>40 Foot</Button>
					<Button onClick={() => handleLocationSelect('VicoBaths')}>Vico Baths</Button>
					<Button onClick={() => handleLocationSelect('Seapoint')}>Seapoint</Button>
					<Button onClick={() => handleLocationSelect('Killiney')}>Killiney</Button>
					<Button kind='secondary' dropdownOpen={moreOpen} onClick={() => setMoreOpen(!moreOpen)}>
						<span>More</span>
						<svg
							width='13'
							height='8'
							viewBox='0 0 13 8'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							{!moreOpen ? (
								<path
									d='M11.2401 0.294922L6.65015 4.87492L2.06015 0.294922L0.650146 1.70492L6.65015 7.70492L12.6501 1.70492L11.2401 0.294922Z'
									fill='white'
								/>
							) : (
								<path
									d='M1.43958 7.71806L6.01646 3.12494L10.6195 7.69178L12.0255 6.27775L6.00835 0.29495L0.0255542 6.3121L1.43958 7.71806Z'
									fill='white'
								/>
							)}
						</svg>
					</Button>
					<DropdownMenu
						locations={locations}
						dropdownOpen={moreOpen}
						onSelect={handleLocationSelect}
					/>
				</FlexWrap>
			</UiWrap>
		</Wrap>
	);
};

export default App;
