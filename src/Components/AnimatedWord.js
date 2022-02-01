import styled, { keyframes } from 'styled-components'

const AnimatedContainer = styled.div`
	display: flex;
`

const rubberband = keyframes`
from {
		transform: scale3d(1, 1, 1);
	}

	1% {
		transform: scale3d(1.25, 0.75, 1);
	}

	2% {
		transform: scale3d(0.75, 1.25, 1);
	}

	3% {
		transform: scale3d(1.15, 0.85, 1);
	}

	4% {
		transform: scale3d(0.95, 1.05, 1);
	}

	5% {
		transform: scale3d(1.05, 0.95, 1);
	}

	6% {
		transform: scale3d(1, 1, 1);
	}

	to {
		transform: scale3d(1, 1, 1);
	}`

const Letter = styled.div`
	animation-duration: 10s;
	animation-delay: ${props => 350 * props.index}ms;
	animation-fill-mode: both;
	animation-iteration-count: infinite;
	font-size: 90px;
	font-weight: bold;
	-webkit-animation-name: ${rubberband};
	animation-name: ${rubberband};
`

const Space = styled.div`
	font-size: 80px;
	font-weight: bold;
	color: transparent;
`

const AnimatedWord = ({ word }) => (
	<AnimatedContainer>
		{word.map((letter, index) =>
			letter === '-' ? (
				<Space key={index}>-</Space>
			) : (
				<Letter key={index} index={index}>
					{letter}
				</Letter>
			)
		)}
	</AnimatedContainer>
)

export default AnimatedWord
