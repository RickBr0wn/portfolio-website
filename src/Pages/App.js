import { ThemeProvider } from 'styled-components'
import { Theme } from '../Theme/ColorTheme'
import LayoutContainer from '../Components/LayoutContainer'
// import SiteUnderConstruction from '../Components/SiteUnderConstruction'
import AnimatedWord from '../Components/AnimatedWord'

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<LayoutContainer>
				{/* <SiteUnderConstruction /> */}
				<AnimatedWord word={Array.from('Rick-Brown')} />
			</LayoutContainer>
		</ThemeProvider>
	)
}

export default App
