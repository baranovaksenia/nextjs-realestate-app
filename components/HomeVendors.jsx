import Link from "next/link"
import vendors from "../dummydata.json"
import VendorCard from "./VendorCard"

const HomeVendors = () => {
	const recentVendors = vendors
		.sort(() => Math.random() - Math.random())
		.slice(0, 3)

	return (
		<>
			<section class="px-4 py-6">
				<div className="container-xl lg:container m-auto">
					<h2 className="text-3xl font-bold text-[#1e295a] mb-6 text-center">
						Recent Vendors
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{recentVendors === 0 ? (
							<p>No Properties Found</p>
						) : (
							recentVendors.map(vendor => (
								<VendorCard key={vendor._id} vendor={vendor} />
							))
						)}
					</div>
				</div>
			</section>
			<section className="m-auto max-w-lg my-10 px-6">
				<Link
					href="/vendors"
					className="block bg-[#4c5187] text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
				>
					View All Vendors
				</Link>
			</section>
		</>
	)
}

export default HomeVendors
