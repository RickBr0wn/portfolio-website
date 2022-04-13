import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import NextLink from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { AllPostData } from '../types'
import {
	Box,
	Link,
	ListItem,
	Tab,
	Tabs,
	TabList,
	TabPanel,
	TabPanels,
	Text,
	UnorderedList
} from '@chakra-ui/react'

export default function Home({ allPostsData }: AllPostData) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<Box m='18px 0px 28px 0px' lineHeight='1.5' textAlign='justify'>
				<Text>
					Hello. I'm a self taught developer and life-long learner based in the
					South East of England. I enjoy turning complex problems into simple,
					beautiful and intuitive user experiences. When I'm not pushing pixels,
					you'll find me reading, cooking, gardening or walking in the beautiful
					English countryside.
				</Text>
			</Box>

			<Box fontSize='1.1rem' lineHeight='1.5' pt={1}>
				<Tabs isFitted size='lg' variant='enclosed'>
					<TabList>
						<Tab>Blog</Tab>
						<Tab>Projects</Tab>
						<Tab>Contact Me</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<UnorderedList mt={6} listStyleType='none' spacing={5}>
								{allPostsData.map(({ id, date, title }) => (
									<ListItem key={id} p='0px' m='0px'>
										<NextLink href={`/posts/${id}`}>
											<Link>{title}</Link>
										</NextLink>
										<br />
										<Text color='#9C9C9C' fontSize='sm'>
											<Date dateString={date} />
										</Text>
									</ListItem>
								))}
							</UnorderedList>
						</TabPanel>
						<TabPanel>
							<h1>Projects</h1>
						</TabPanel>
						<TabPanel>
							<h1>Contact Me</h1>
						</TabPanel>
					</TabPanels>
				</Tabs>

				{/* <Text fontSize='2xl' fontWeight='bold'>
					Blog
				</Text>
				<UnorderedList mt={6} listStyleType='none' spacing={5}>
					{allPostsData.map(({ id, date, title }) => (
						<ListItem key={id} p='0px' m='0px'>
							<NextLink href={`/posts/${id}`}>
								<Link>{title}</Link>
							</NextLink>
							<br />
							<Text color='#9C9C9C' fontSize='sm'>
								<Date dateString={date} />
							</Text>
						</ListItem>
					))}
				</UnorderedList> */}
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
