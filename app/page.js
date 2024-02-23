import Hero from "@/components/Hero"
import HomeVendors from "@/components/HomeVendors"
import InfoBoxes from "@/components/InfoBoxes"
import connectDB from "@/config/database"
const Home = async () => {
	await connectDB()

	return (
		<>
			<Hero />
			<InfoBoxes />
			<HomeVendors />
			{/* <TextRevealCard
				text="Explore Crypto Services"
				revealText="Explore Crypto Services"
			/> */}
		</>
	)
}
export default Home
