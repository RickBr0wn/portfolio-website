import '../styles/global.css'
import { AppProps } from 'next/app'
import { CSSReset, extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
	fonts: {
		heading: 'Catamaran, sans-serif',
		body: 'Noto Sans, sans-serif'
	}
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
