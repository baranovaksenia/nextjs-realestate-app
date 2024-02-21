import InfoBox from "./InfoBox"

const InfoBoxes = () => {
	return (
		<section>
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<InfoBox
						heading="For Crypto Enthusiasts"
						backgroundColor="bg-gray-100"
						textColor=""
						buttonInfo={{
							href: "/vendors",
							label: "Browse Services",
							backgroundColor: "bg-black",
						}}
					>
						Explore the marketplace for the best cryptocurrency exchange rates.
						Trade securely with vetted partners.
					</InfoBox>

					<InfoBox
						heading="For Service Providers"
						backgroundColor="bg-blue-100"
						textColor=""
						buttonInfo={{
							href: "/vendors/add",
							label: "List Your Services",
							backgroundColor: "bg-blue-500",
						}}
					>
						Offer your crypto-related services to a broad audience. Collaborate
						and expand your client base.
					</InfoBox>
				</div>
			</div>
		</section>
	)
}

export default InfoBoxes
