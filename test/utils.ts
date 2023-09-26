export function shortenAddress(address: string, headLength = 6, endLength = 4) {
	if (typeof address !== 'string') return
	if (address.length <= headLength + endLength) {
		return address
	}
	return `${address.slice(0, headLength)}...${address.slice(-endLength)}`
}
