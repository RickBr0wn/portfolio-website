import { ThemeProvider } from 'styled-components'
import { Theme } from '../Theme/ColorTheme'
import LayoutContainer from '../Components/LayoutContainer'
// import SiteUnderConstruction from '../Components/SiteUnderConstruction'
import AnimatedWord from '../Components/AnimatedWord'
import styled from 'styled-components'
import image from '../assets/image.png'

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: -16rem;
	position: relative;
`

const Image = styled.img`
	height: ${props => props.size}rem;
	width: ${props => props.size}rem;
	position: absolute;
	top: -0.4rem;
	left: -20rem;
`

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<LayoutContainer>
				{/* <SiteUnderConstruction /> */}
				<TextContainer>
					<Image size={18} src={image} />
					<h2> Hello, I'm</h2>
					<AnimatedWord word={Array.from('Rick-Brown')} />
					<h2>and I create unique web and iOS experiences.</h2>
				</TextContainer>
			</LayoutContainer>
		</ThemeProvider>
	)
}

export default App
