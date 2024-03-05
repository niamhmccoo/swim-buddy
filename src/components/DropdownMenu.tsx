import gsap from 'gsap';
import { useRef, useEffect, FC } from 'react';
import { Dropdown, DropdownItem, Button } from '../App.styles';

type Props = {
	dropdownOpen: boolean;
	locations: { name: string }[];
};

const DropdownMenu: FC<Props> = ({ dropdownOpen, locations }: Props) => {
	const dropdownRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (dropdownOpen && dropdownRef.current) {
			gsap.to(dropdownRef.current, {
				duration: 1,
				height: 'auto',
				ease: 'power2.out',
			});
		} else if (!dropdownOpen && dropdownRef.current) {
			gsap.to(dropdownRef.current, {
				duration: 1,
				height: 0,
				ease: 'power2.out',
			});
		}
	}, [dropdownOpen]);

	return (
		<Dropdown ref={dropdownRef} dropdownOpen={dropdownOpen}>
			{locations.map((l, i) => (
				<DropdownItem key={i}>
					<Button kind='secondary'>{l.name}</Button>
				</DropdownItem>
			))}
		</Dropdown>
	);
};

export default DropdownMenu;
