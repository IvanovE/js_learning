export function storage (setItem=null, searchByKey=null) {

  if (setItem && searchByKey) {
      throw new Error("Set and Get can't be used together")
  }

  try {
    if (setItem) {
      if (localStorage.length === 0) {
        localStorage.setItem("cart", "[]")
      }
      const lsItems = JSON.parse(localStorage.getItem("cart"))
      lsItems.push(setItem)
      localStorage.removeItem("cart")
      localStorage.setItem("cart", JSON.stringify(lsItems))
      return
    }
  } catch (error) {
    return `Something wrong with setting to the localStorage - ${error}`
  }

  try {
    if (searchByKey) {
      const lsItems = JSON.parse(localStorage.getItem("cart"))
      return lsItems.find(item => item.name === searchByKey)
    }

    const localStorageItems = []

    if (localStorage.length === 0) {
      return localStorageItems
    }
    return JSON.parse(localStorage.getItem("cart"))
  } catch (error) {
    return `Something wrong with getting from the localStorage - ${error}`
  }
}

export function storageRemove (key) {
  let lsItems = JSON.parse(localStorage.getItem("cart"))
  const idToDelete = lsItems.findIndex(item => item.name === key)
  lsItems = lsItems.splice(idToDelete, idToDelete)
  localStorage.removeItem("cart")
  localStorage.setItem("cart", JSON.stringify(lsItems))
}
