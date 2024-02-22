import Hero from "@/components/Hero"
import HomeVendors from "@/components/HomeVendors"
import InfoBoxes from "@/components/InfoBoxes"
import { TextRevealCard } from "@/components/ui/text-reveal-card"

export default function Home() {
	return (
		<>
			<Hero />
			<InfoBoxes />
			<HomeVendors />
			<TextRevealCard
				text="Explore Crypto Services"
				revealText="Explore Crypto Services"
			/>
		</>
	)
}
