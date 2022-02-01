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

const NavigationItems = styled.a`
	display: flex;
	justify-content: space-between;
	width: 40vw;
	padding: 2rem;
`

const NavigationLogo = styled.div`
	padding: 2rem;
`

const NavigationLink = styled.div``

const LayoutContainer = ({ children }) => (
	<Layout>
		<NavigationBar>
			<NavigationLogo>RB</NavigationLogo>
			<NavigationItems>
				<NavigationLink>about</NavigationLink>
				<NavigationLink>blog</NavigationLink>
				<NavigationLink>projects</NavigationLink>
				<NavigationLink>contact me</NavigationLink>
			</NavigationItems>
		</NavigationBar>
		{children}
		<footer>
			<Link href='mailto:info@rick.brown.co.uk'>
				<span className='link'>info@rick.brown.co.uk</span>
			</Link>
		</footer>
	</Layout>
)

export default LayoutContainer
