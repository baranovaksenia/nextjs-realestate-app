import Image from "next/image"
import Link from "next/link"
import { CiBitcoin, CiMoneyBill } from "react-icons/ci"
import { FaMapMarker } from "react-icons/fa"
import vendorImg from "/assets/images/vendors/j1.jpg"
const VendorCard = ({ vendor }) => {
	return (
		<div className="bg-white rounded-xl shadow-md relative">
			<Image
				src={vendorImg}
				// src={`/assets/images/vendors/${vendor.images[0]}`}
				alt="vendor service image"
				className="object-cover rounded-t-xl vendor-image"
				height={360}
				width={640}
				sizes="(max-width: 640px) 100vw, 640px"
			/>
			<div className="p-4">
				<div className="text-center mb-6">
					<div className="text-gray-600">{vendor.service_type}</div>
					<h3 className="text-xl font-bold">{vendor.name}</h3>
				</div>
				<h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
					{vendor.service_rates.conversion_fee_percent}% Commission
				</h3>
				<div className="flex justify-center  gap-4 text-gray-700 mb-4">
					{vendor.supported_cryptos.map(crypto => (
						<div
							key={crypto}
							className="flex justify-center flex-col items-center"
						>
							<CiBitcoin color="#F18F01" />
							<p>{crypto}</p>
						</div>
					))}
				</div>
				<div className="flex justify-center gap-4 text-green-900 text-md mb-4">
					{vendor.supported_fiat.map(fiat => (
						<div
							className="flex justify-center flex-col items-center"
							key={fiat}
						>
							<CiMoneyBill color="green" />
							<p>{fiat}</p>
						</div>
					))}
				</div>
				<div className="border border-gray-100 mb-5" />
				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="flex align-middle gap-2 mb-4 lg:mb-0">
						<FaMapMarker className="text-orange-700 mt-1" />
						<span className="text-[#353535] font-semibold">
							{vendor.contact_info.location}{" "}
						</span>
					</div>
					<Link
						href={`/vendors/${vendor._id}`}
						className="h-[36px] bg-[#1e295a] hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	)
}

export default VendorCard
