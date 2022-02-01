import styled from 'styled-components'

const Layout = styled.div`
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-family: 'Inter', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 1.6rem;
	background-color: ${props => props.theme.colors.backgroundColor};
	color: ${props => props.theme.colors.middleFontColor};
`

const Link = styled.a`
	text-decoration: none;
	color: ${props => props.theme.colors.linkColor};
	cursor: pointer;
`

const NavigationBar = styled.nav`
	display: flex;
	width: 100vw;
	justify-content: space-between;
`

const NavigationItems = styled.h4`
	display: flex;
	justify-content: space-evenly;
	width: 30vw;
	padding: 3rem 0rem;
	text-transform: uppercase;
`
const NavigationLogo = styled.div`
	padding: 2rem;
`

const NavigationLink = styled.div`
	cursor: pointer;
`

const LayoutContainer = ({ children }) => (
	<Layout>
		<NavigationBar>
			<NavigationLogo>{''}</NavigationLogo>
			<NavigationItems>
				{/* <NavigationLink>about</NavigationLink> */}
				<NavigationLink>blog</NavigationLink>
				<NavigationLink>projects</NavigationLink>
				<NavigationLink>contact me</NavigationLink>
			</NavigationItems>
		</NavigationBar>
		{children}
		<footer>
			{/* <Link href='mailto:info@rick.brown.co.uk'>
				<span className='link'>info@rick.brown.co.uk</span>
			</Link> */}
		</footer>
	</Layout>
)

export default LayoutContainer
