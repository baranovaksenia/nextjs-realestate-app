import "@/assets/styles/globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "PropertyPulse | Find The Perfect Rental",
	description: "Find the perfect rental for your needs",
	keywords: "rental, property, find, perfect, perfect rental, perfect property",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
