import { Map } from './map.js'
import { getCoordinatesFromAddress, getAddressFromCoords } from '../utils/getLocation.js'

export class PlaceFinder {
  constructor() {
    this.addressForm = document.querySelector('#address-form')
    this.btnGetLocation = document.querySelector('#get-current-location')
    this.inputAddress = document.querySelector('#address')
    this.sharePlaceBtn = document.querySelector('#share-place')
    this.sharedLinkInput = document.querySelector('#share-place-link')

    this.sharePlaceBtn.addEventListener('click', this.shareLink.bind(this))
    this.btnGetLocation.addEventListener('click', this.getLocation.bind(this))
    this.addressForm.addEventListener('submit', this.findAddressForm.bind(this))
  }

  selectPlace(coords, address) {
    if (this.map) {
      this.map.render(coords)
      return
    }
    this.map = new Map(coords)
    this.sharePlaceBtn.classList.remove('disabled')
    this.sharePlaceBtn.disabled = false
    this.sharedLinkInput.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coords.lat}&lng=${coords.lng}`
  }

  getLocation() {
    if (!navigator.geolocation) {
      alert('This feature does not supported in your browser! Sorry!')
      return
    }

    navigator.geolocation.getCurrentPosition(async successResult => {
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude
      }

      const address = await getAddressFromCoords(coordinates)
      this.selectPlace(coordinates, address)
    }, error => {
      alert('Can not get your location!')
    })
  }

  async findAddressForm(event) {
    event.preventDefault()
    const address = this.inputAddress.value

    if (!address || address.trim().length === 0) {
      alert('Enter valid address!')
      return
    }
    try {
      const coordinates = await getCoordinatesFromAddress(address)
      this.selectPlace(coordinates, address)
    } catch (error) {
      alert('Something went wrong!')
      console.error(error.message)
    }
  }

  shareLink() {
    if (!navigator.clipboard) {
      this.sharedLinkInput.select()
      return
    }
    navigator.clipboard.writeText(this.sharedLinkInput.value)
      .then(() => console.log('Successfully copied'))
      .catch(error => console.log(error))
  }
}
