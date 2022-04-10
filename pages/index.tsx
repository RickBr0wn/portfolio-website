import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import NextLink from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { AllPostData } from '../types'
import { Box, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'

export default function Home({ allPostsData }: AllPostData) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			{/* <section className={utilStyles.headingMd}> */}
			<Box m='44px 0px' fontSize='1.1rem' lineHeight='1.5'>
				<Text>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
					voluptatum repudiandae. Neque illo adipisci magnam rerum
					exercitationem iusto. Numquam deleniti quia corrupti! Enim, quam saepe
					laboriosam ex eos nisi consectetur?
				</Text>
			</Box>
			<Box fontSize='1.1rem' lineHeight='1.5' pt={1}>
				<Text fontSize='2xl' fontWeight='bold'>
					Blog
				</Text>
				<UnorderedList mt={6} listStyleType='none' spacing={5}>
					{allPostsData.map(({ id, date, title }) => (
						<ListItem key={id} p='0px' m='0px'>
							<NextLink href={`/posts/${id}`}>
								<Link>{title}</Link>
							</NextLink>
							<br />
							<Text color='#666' fontSize='sm'>
								<Date dateString={date} />
							</Text>
						</ListItem>
					))}
				</UnorderedList>
			</Box>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
