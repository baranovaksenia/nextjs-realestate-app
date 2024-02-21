import logo from "@/assets/images/logo.png"
import Image from "next/image"
import Link from "next/link"
const Footer = () => {
	return (
		<footer className="bg-gray-200 py-4 mt-auto">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
				<div className="mb-4 md:mb-0">
					<Image src={logo} alt="Logo" className="h-8 w-auto" />
				</div>

				<div className="flex flex-wrap gap-x-8 justify-center items-center md:justify-start mb-4 md:mb-0 text-sm text-gray-500 mt-2 md:mt-0">
					<Link href="/terms">Terms of Service</Link>
					<p className="">
						© {new Date().getFullYear()} PropertyPulse. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
