export const GET = async request => {
	try {
		return new Response("Hello", { status: 200 })
	} catch (error) {
		console.log(error)
	}
}
