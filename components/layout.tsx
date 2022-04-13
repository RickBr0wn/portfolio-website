import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Switch,
	Text,
	useColorMode
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { LayoutContent } from '../types'
import '@fontsource/catamaran/900.css'

const name = 'Rick Brown'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }: LayoutContent) {
	const { toggleColorMode } = useColorMode()

	return (
		<Container maxWidth={500}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>
			<Switch onChange={toggleColorMode} pos='absolute' right='8' top='3' />
			{home && (
				<Flex flexDir='column' align='center'>
					<Box mt='22px'>
						<Image
							priority
							src='/images/profile.png'
							height={144}
							width={144}
							alt={name}
						/>
					</Box>

					<Heading as='h1' size='4xl'>
						{name}
					</Heading>

					<Text fontSize='2xl' opacity={0.4}>
						web & iOS developer
					</Text>
				</Flex>
			)}
			<Box>{children}</Box>
			{!home && (
				<Box mb='2.4rem'>
					<NextLink href='/'>
						<Link>← Back to home</Link>
					</NextLink>
				</Box>
			)}
		</Container>
	)
}
