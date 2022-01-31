import { ThemeProvider } from 'styled-components'
import { Theme } from '../Theme/ColorTheme'
import LayoutContainer from '../Components/LayoutContainer'
import SiteUnderConstruction from '../Components/SiteUnderConstruction'

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<LayoutContainer>
				<SiteUnderConstruction />
			</LayoutContainer>
		</ThemeProvider>
	)
}

export default App
