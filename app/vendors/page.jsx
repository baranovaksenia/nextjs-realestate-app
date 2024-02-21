import VendorCard from "@/components/VendorCard"
import vendors from "../../dummydata.json"
const VendorsPage = () => {
	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				{vendors.length === 0 ? (
					<p>No vendors found.</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{vendors.map(vendor => (
							<VendorCard key={vendor._id} vendor={vendor} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default VendorsPage
