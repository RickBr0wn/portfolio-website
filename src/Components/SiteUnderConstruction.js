import styled from 'styled-components'

const Link = styled.a`
	text-decoration: none;
	color: ${props => props.theme.colors.linkColor};
	cursor: pointer;
`

export default function SiteUnderConstruction() {
	return (
		<div>
			<h1>This site is currently under construction.</h1>
			<p>For more information please email me:</p>
			<Link href='mailto:info@rick.brown.co.uk'>
				<span className='link'>info@rick.brown.co.uk</span>
			</Link>
		</div>
	)
}
