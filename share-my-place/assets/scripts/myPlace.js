import { Map } from './map.js'

class LoadedPlace {
  constructor(coords, address) {
    new Map(coords)
    const headerTitle = document.querySelector('#header-title')
    headerTitle.textContent = address
    this.shareNewPlaceBtn = document.querySelector('#share-new-place-btn')
    this.shareNewPlaceBtn.addEventListener('click', () => history.go(-1))
  }
}

const url = new URL(location.href)
const queryParams = url.searchParams
const coords = {
  lat: +queryParams.get('lat'),
  lng: +queryParams.get('lng')
}
const address = queryParams.get('address')
new LoadedPlace(coords, address)
