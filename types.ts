import { ReactNode } from 'react'

interface PostDataWithId {
	date: string
	title: string
	id: string
	image: string
}

interface PostDataWithHtmlContent {
	title: string
	date: string
	image: string
	contentHtml: string
}

export interface AllPostData {
	allPostsData: Array<PostDataWithId>
}

export interface PostData {
	postData: PostDataWithHtmlContent
}

export interface LayoutContent {
	children: ReactNode
	home?: boolean
}

export interface DateString {
	dateString: string
}

export interface ColorTheme {
	colors: {
		backgroundColor: string
		linkColor: string
		lightestFontColor: string
		lightFontColor: string
		middleFontColor: string
		categoryItemColor: string
		categoryBackgroundColor: string
		categoryBorderColor: string
		categoryTextColor: string
		categoryHighlightBorderColor: string
		categoryHighlightTextColor: string
	}
}
