import { NextApiRequest, NextApiResponse } from 'next'

const Hello = async (_: NextApiRequest, res: NextApiResponse) => {
	const response = await fetch(`https://rickandmortyapi.com/api/character`)
	const data = await response.json()

	res.status(200).json(data)
}

export default Hello
