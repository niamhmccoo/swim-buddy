import styled, { keyframes, css } from 'styled-components';

export const Wrap = styled.div`
	.wave {
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const UiWrap = styled.div`
	position: relative;
	text-align: center;
	min-height: 100vh;
	z-index: 99;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	opacity: 0;
	animation: ${fadeIn} 1s ease-out 2s forwards;
`;

export const FlexWrap = styled.div`
	display: flex;
	margin: 2rem 0;
	align-items: center;
	flex-flow: column nowrap;
`;

export const Button = styled.button<{ kind?: string; dropdownOpen?: boolean }>`
	background: ${({ dropdownOpen }) => (dropdownOpen ? 'rgba(255, 255, 255, 0.05)' : 'none')};
	color: #fff;
	padding: 2rem 0;
	font-size: 1rem;
	font-weight: 100;
	text-align: center;
	border: solid 1px #fff;
	border-radius: 1.25rem;
	outline: none;
	position: relative;
	padding: 1rem 2rem;
	cursor: pointer;
	width: 10rem;
	margin: 1rem 0;

	${({ kind }) =>
		kind === 'secondary' &&
		css`
			border: none;

			svg {
				margin: 0 0.75rem;
			}
			&:hover {
				background: rgba(255, 255, 255, 0.05);
			}
		`};
`;

export const Dropdown = styled.ul<{ dropdownOpen: boolean }>`
	opacity: ${({ dropdownOpen }) => (dropdownOpen ? '1' : '0')};
	background: rgba(255, 255, 255, 0.05);
	border-radius: 1.25rem;
	padding: 0;
	list-style: none;
	overflow: hidden;
	margin: 0;
`;

export const DropdownItem = styled.li`
	padding: 0;

	button {
		margin: 0;
		&:hover {
			background: none;
		}
	}
`;
