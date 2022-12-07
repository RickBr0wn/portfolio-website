import { NextApiRequest, NextApiResponse } from 'next'

const Hello = async (_: NextApiRequest, res: NextApiResponse) => {
	const response: Response = await fetch(
		`https://rickandmortyapi.com/api/character`
	)
	const data: Response = await response.json()

	return res.status(200).json(data)
}

export default Hello
