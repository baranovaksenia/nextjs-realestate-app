const Hero = () => {
	return (
		<section className="bg-blue-700 py-20 mb-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
				<div className="text-center">
					<h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
						Explore Crypto Services
					</h1>
					<p className="my-4 text-xl text-white">
						Find the ideal service for your cryptocurrency needs.
					</p>
				</div>
				<form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
					<div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
						<label htmlFor="location" className="sr-only">
							Location
						</label>
						<input
							type="text"
							id="location"
							placeholder="Enter Location (City, State, Zip, etc"
							className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
						/>
					</div>
					<div className="w-full md:w-2/5 md:pl-2">
						<label htmlFor="property-type" className="sr-only">
							Service Type
						</label>
						<select
							id="service-type"
							className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
						>
							<option value="All">All Services</option>
							<option value="ExchangeCrypto">Cryptocurrency Exchange</option>
							<option value="CryptoToFiat">Crypto to Fiat Currency</option>
							<option value="FiatToCrypto">Fiat Currency to Crypto</option>
							<option value="CryptoEscrow">
								Cryptocurrency Escrow Service
							</option>
							<option value="CryptoWallet">Cryptocurrency Wallet</option>
							<option value="DefiServices">
								Decentralized Finance (DeFi) Services
							</option>
							<option value="NftMarketplace">NFT Marketplace</option>
							<option value="CryptoStaking">Crypto Staking</option>
							<option value="CryptoLending">Crypto Lending</option>
							<option value="BlockchainConsulting">
								Blockchain Consulting
							</option>
							<option value="Other">Other Services</option>
						</select>
					</div>
					<button
						type="submit"
						className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
					>
						Search
					</button>
				</form>
			</div>
		</section>
	)
}

export default Hero
