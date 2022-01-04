export async function getCoordinatesFromAddress(address) {
  const addressUrl = encodeURI(address)
  const googleGeocodingUrl =
    `https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=API_KEY`

  const response = await fetch(googleGeocodingUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please, try again!')
  }
  const data = await response.json()

  if(data.error_message) {
    throw new Error(data.error_message)
  }

  return data.results[0].geometry.location // coordinates
}

export async function getAddressFromCoords(coords) {
  const googleGeocodingUrl =
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat}, ${coords.lng}&key=API_KEY`

  const response = await fetch(googleGeocodingUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch address. Please, try again!')
  }

  const data = await response.json()
  if(data.error_message) {
    throw new Error(data.error_message)
  }

  return data.results[0].formatted_address
}
