import { connectToDb } from '../../../modules/mongo'
import Option from '../../../modules/mongo/schema/Option'

export const dynamic = 'force-dynamic'

export async function GET() {
	await connectToDb()
	const options = await Option.findOne({}, { _id: 0 }).lean()

	return Response.json(options)
}
