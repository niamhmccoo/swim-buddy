import styled from 'styled-components';

export const Wrap = styled.div`
	svg {
		transform: translateY(100%); /* start position below viewport */
		position: absolute;
		top: 0;
	}
`;

export const TopWave = styled.svg`
	z-index: 3;
`;

export const MidWave = styled.svg`
	z-index: 2;
`;

export const BottomWave = styled.svg`
	z-index: 1;
`;
