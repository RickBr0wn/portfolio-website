import styled from 'styled-components'

const Layout = styled.div`
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	padding-left: 20rem;
	font-family: 'Inter', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 1.6rem;
	background-color: ${props => props.theme.colors.backgroundColor};
	color: ${props => props.theme.colors.middleFontColor};
`

const LayoutContainer = ({ children }) => <Layout>{children}</Layout>

export default LayoutContainer
