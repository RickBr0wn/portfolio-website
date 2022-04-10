import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { LayoutContent } from '../types'
import '@fontsource/catamaran/900.css'

const name = 'Rick Brown'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }: LayoutContent) {
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
			{home && (
				<Flex flexDir='column' align='center'>
					<Box mt='96px'>
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

					<Text fontSize='2xl' fontWeight='light'>
						web & iOS developer
					</Text>
				</Flex>
			)}
			<Box>{children}</Box>
			{!home && (
				<div>
					<NextLink href='/'>
						<Link>← Back to home</Link>
					</NextLink>
				</div>
			)}
		</Container>
	)
}
