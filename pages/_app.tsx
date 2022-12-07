import 'focus-visible/dist/focus-visible'
import { Global, css } from '@emotion/react'
import { AppProps } from 'next/app'
import { CSSReset, extendTheme, theme, type ThemeConfig } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus 
		via the mouse, but it will still show up on keyboard focus.
  */  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const myTheme = extendTheme({
	...theme,
	fonts: {
		heading: 'Catamaran, sans-serif',
		body: 'Noto Sans, sans-serif'
	},
	config
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={myTheme}>
			<Global styles={GlobalStyles} />
			<CSSReset />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
